import { useEffect, useRef, useState } from "react";

const FRAMES = {
  front: ["./assets/sprites/front/front1.png", "./assets/sprites/front/front2.png", "./assets/sprites/front/front3.png", "./assets/sprites/front/front4.png"],
  back: ["./assets/sprites/back/back1.png", "./assets/sprites/back/back2.png", "./assets/sprites/back/back3.png", "./assets/sprites/back/back4.png"],
  side: ["./assets/sprites/side/side1.png", "./assets/sprites/side/side2.png", "./assets/sprites/side/side4.png"],
  eat: ["./assets/sprites/eat/eat1.png", "./assets/sprites/eat/eat2.png"],
};

const SIZE = 96;
const REPEL_RADIUS = 150;
const EAT_RANGE = 20;
const SEEK_SPEED = 160;
const FRAME_MS = 110;
const EAT_MS = 1200;
const PAW_STEP = 40;
const PAW_ROTATE = 45;
const MOBILE_QUERY = "(max-width: 768px)";

const PRELOADED = Object.values(FRAMES).flat().map((src) => {
  const img = new Image();
  img.src = src;
  return img;
});
export default function Tyson() {
  const wrapRef = useRef(null);
  const imgRef = useRef(null);
  const trailRef = useRef(null);
  const walked = useRef(0);
  const mouse = useRef({ x: -9999, y: -9999 });
  const treatsRef = useRef([]);
  const dog = useRef({
    x: 300, y: 300, view: "front", flip: false,
    frame: 0, lastFrame: 0, eating: false, eatUntil: 0,
  });
  const [treats, setTreats] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(MOBILE_QUERY);
    let cleanup;

    const start = () => {
      cleanup?.();
      const mobile = mq.matches;
      const d = dog.current;

      treatsRef.current = [];
      setTreats([]);
      setIsMobile(mobile);
      d.eating = false;

      // mobile: absolute + page coords (page scrolls). desktop: fixed + viewport coords.
      wrapRef.current.style.position = mobile ? "absolute" : "";

      // area the dog's CENTER may occupy
      const getBounds = () => {
        let left = 0, top = 0, right = window.innerWidth, bottom = window.innerHeight;
        if (mobile) {
          const page = document.querySelector("#home-page");
          if (page) {
            const r = page.getBoundingClientRect();
            left = r.left + window.scrollX;
            top = r.top + window.scrollY;
            right = left + r.width;
            bottom = top + r.height;
          }
        }
        return {
          minX: left + SIZE / 2, maxX: right - SIZE / 2,
          minY: top + SIZE / 2, maxY: bottom - SIZE / 2,
        };
      };
      const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));

      // mobile: start under the tagline
      if (mobile) {
        const anchor = document.querySelector("#small-tag");
        if (anchor) {
          const r = anchor.getBoundingClientRect();
          d.x = r.left + r.width / 2 + window.scrollX;
          d.y = r.bottom + window.scrollY + SIZE / 2 + 80;
        }
      }

      const onMove = (e) => { mouse.current = { x: e.clientX, y: e.clientY }; };

      const onClick = (e) => {
        if (e.target.closest("a, button")) return;
        if (mobile && !e.target.closest("#home-page")) return; // home page only on mobile

        const b = getBounds();
        const rawX = mobile ? e.pageX : e.clientX;
        const rawY = mobile ? e.pageY : e.clientY;
        // clamp so the treat is always reachable by the dog
        const treat = {
          id: crypto.randomUUID(),
          x: clamp(rawX, b.minX, b.maxX),
          y: clamp(rawY, b.minY, b.maxY),
        };
        treatsRef.current = [...treatsRef.current, treat];
        setTreats(treatsRef.current);
      };

      if (!mobile) window.addEventListener("mousemove", onMove);
      window.addEventListener("click", onClick);

      const dropPaw = (x, y, deg) => {
        const el = document.createElement("span");
        el.className = "paw";
        el.textContent = "🐾";
        if (mobile) el.style.position = "absolute";
        el.style.left = `${x}px`;
        el.style.top = `${y}px`;
        el.style.setProperty("--rot", `${deg + PAW_ROTATE}deg`);
        el.addEventListener("animationend", () => el.remove());
        trailRef.current.appendChild(el);
      };

      let raf;
      let last = performance.now();

      const tick = (now) => {
        const dt = Math.min((now - last) / 1000, 0.05);
        last = now;
        let vx = 0, vy = 0;

        if (d.eating) {
          if (now >= d.eatUntil) d.eating = false;
        } else {
          let treat = null, best = Infinity;
          for (const t of treatsRef.current) {
            const dist = Math.hypot(t.x - d.x, t.y - d.y);
            if (dist < best) { best = dist; treat = t; }
          }

          if (treat) {
            if (best < EAT_RANGE) {
              d.eating = true;
              d.eatUntil = now + EAT_MS;
              d.frame = 0;
              treatsRef.current = treatsRef.current.filter((t) => t.id !== treat.id);
              setTreats(treatsRef.current);
            } else {
              vx = ((treat.x - d.x) / best) * SEEK_SPEED;
              vy = ((treat.y - d.y) / best) * SEEK_SPEED;
            }
          } else if (!mobile) {
            // touch screens have no hover, so only desktop gets the mouse-repel
            const dx = d.x - mouse.current.x;
            const dy = d.y - mouse.current.y;
            const dist = Math.hypot(dx, dy);
            if (dist < REPEL_RADIUS && dist > 0) {
              const speed = 80 + 220 * (1 - dist / REPEL_RADIUS);
              vx = (dx / dist) * speed;
              vy = (dy / dist) * speed;
            }
          }
        }

        const b = getBounds();
        const px = d.x, py = d.y;
        d.x = clamp(d.x + vx * dt, b.minX, b.maxX);
        d.y = clamp(d.y + vy * dt, b.minY, b.maxY);

        walked.current += Math.hypot(d.x - px, d.y - py);
        if (walked.current > PAW_STEP && (vx !== 0 || vy !== 0)) {
          walked.current = 0;
          const deg = (Math.atan2(vy, vx) * 180) / Math.PI;
          dropPaw(d.x, d.y + SIZE * 0.35, deg);
        }

        const moving = vx !== 0 || vy !== 0;
        if (moving) {
          if (Math.abs(vx) > Math.abs(vy)) { d.view = "side"; d.flip = vx > 0; }
          else { d.view = vy > 0 ? "front" : "back"; d.flip = false; }
        }

        let set = FRAMES[d.view];
        if (d.eating) set = FRAMES.eat || FRAMES.front;
        if (moving || d.eating) {
          if (now - d.lastFrame > FRAME_MS) {
            d.frame = (d.frame + 1) % set.length;
            d.lastFrame = now;
          }
        } else {
          d.frame = 0;
        }

       const next = set[d.frame % set.length];
if (d.src !== next) {
  imgRef.current.src = next;
  d.src = next;
}
        imgRef.current.style.transform = d.flip ? "scaleX(-1)" : "none";
        imgRef.current.classList.toggle("dog-eating-fallback", d.eating && !FRAMES.eat);
        wrapRef.current.style.transform =
          `translate(${d.x - SIZE / 2}px, ${d.y - SIZE / 2}px)`;

        raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);

      cleanup = () => {
        cancelAnimationFrame(raf);
        window.removeEventListener("mousemove", onMove);
        window.removeEventListener("click", onClick);
      };
    };

    start();
    mq.addEventListener("change", start); // swap modes on rotate/resize

    return () => {
      mq.removeEventListener("change", start);
      cleanup?.();
    };
  }, []);

  return (
    <>
      <div ref={trailRef} />
      {treats.map((t) => (
        <div
          key={t.id}
          className="treat"
          style={{ left: t.x, top: t.y, position: isMobile ? "absolute" : undefined }}
        >
          🦴
        </div>
      ))}
      <div ref={wrapRef} className="dog">
        <img ref={imgRef} src={FRAMES.front[0]} width={SIZE} height={SIZE} alt="" />
      </div>
    </>
  );
}