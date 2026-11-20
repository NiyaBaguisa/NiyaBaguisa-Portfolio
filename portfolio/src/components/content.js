//project is an object made up of
//tags = arr of strings
// desc = string
// links = [repo: string, site: string]
export default function Content({ project }) {
    const tag = (str) => {
        return (
            <div class="tag-container">
                <p>{str}</p>
            </div>
        )
    }
    return (
        <div class="content-container">
            <div class="tags-container">
                {project.tags.map((title) => tag(title))}
            </div>
            <div class="links-container">
                <div class="site-link">
                    <a aria-label="visit the live site (opens in a new tab)" href={project.site} target="_blank">Visit the Site<span>&#8599;</span></a>

                </div>
                <div class="git-link">
                    <a aria-label="visit the Github repository (opens in a new tab)" href={project.repo} target="_blank">View the Repo<span>&#8599;</span></a>
                </div>

            </div>
            <p className="tagline">{project.tagline}</p>
            {/*<Gallery images={project.images}/>*/}
            <div className="hero-img">
                {project.hero.type == "img" ? <img src={project.hero.str} alt={`Hero image for the ${project.title}`} /> : <video src={project.hero.str} loop muted autoplay="true" alt={`Hero video for the ${project.title}`} />}
            </div>
            <div clasName="description container">
                <p>{project.desc}</p>
                <h3>Highlights</h3>
                <ul>
                    {project.highlights.map((item) => <li>{item}</li>)}
                </ul>
            </div>
        </div>
    )
}