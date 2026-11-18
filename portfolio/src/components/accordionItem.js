import { useState } from "react";
import Content from "./content";

export default function AccordionItem(project){
 const [isActive, setIsActive] = useState(false);

        return(
            <div className="accordion-item">
                 <div className="accordion-title" onClick={()=> setIsActive(!isActive)}>
               <h1 className="proj-title">{project.title}</h1>
             
                <div className={`plus-cross ${isActive? "crossed": ""}`} >
     <svg xmlns="http://w3.org" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
  <path d="M11 4H13V11H20V13H13V20H11V13H4V11H11V4Z"/>
</svg>
                </div>
            
                
 
            </div>
          

           {isActive && 
           <div className="accordion-content">
                <Content project={project}/>
            </div>}

            </div>

        )}
