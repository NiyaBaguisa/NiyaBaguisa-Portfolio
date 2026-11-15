
// takes in an arr of images {str, type}
export default function Gallery({images}){
  

    return(
        <div class="gallery">
            {images.map((image)=>
                <div class="gallery-item" key={image.str}>
                    {image.type == "img"? <img src={image.str}/> :<video src={image.str} type="video/mp4"/>}
 
                </div>
                   
            )}
           
        </div>
    )
}