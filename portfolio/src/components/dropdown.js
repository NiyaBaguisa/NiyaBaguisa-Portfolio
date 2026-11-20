

import { projectList } from "./projectList";
import AccordionItem from "./accordionItem";

export default function Dropdown() {
    return (
        <div class="accordion-container">
            {projectList.map((item) => AccordionItem(item))}
        </div>
    )
}