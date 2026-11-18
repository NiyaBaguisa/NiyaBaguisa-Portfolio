

//project is an object made up of
//tags = arr of strings
// desc = string
// links = [repo: string, site: string]

import Gallery from "./gallery"

export default function Content({project}){
    const tag = (str)=>{
        return(
            <div class="tag-container">
    <p>{str}</p>
</div>
        )

    }
    
    return(
        <div class="content-container">
            <div class="tags-container">
                {project.tags.map((title)=>tag(title))}
            </div>
             <div class="links-container">
                <div class="site-link">
<a  href={project.site} target="_blank">Visit the Site<span>&#8599;</span></a>
                
                </div>
                <div class="git-link">
                    <a  href={project.repo} target="_blank">View the Repo<span>&#8599;</span></a>


                </div>
                
            </div>
            <p className="tagline">{project.tagline}</p>
            {/*<Gallery images={project.images}/>*/}
            <div className="hero-img">
                {project.hero.type == "img" ? <img src={project.hero.str}/>:<video src={project.hero.str} loop muted autoplay="true"/> }    
            </div>
            <div clasName="description container">
                <p>{project.desc}</p>
                <h3>Highlights</h3>
                <ul>
                    {project.highlights.map((item)=> <li>{item}</li>)}
                </ul>
            </div>
           

        </div>
    )
}