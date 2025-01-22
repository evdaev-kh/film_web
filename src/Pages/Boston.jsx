import React from "react";
import bostonPics from "./bostonPics";

function imageGallery(pic) {
    console.log("Clicked!");
    console.log("Image: " + pic);

    return (
        <div className="Galley" >
            <img className="galleryImage" src={"..photos/Boston" + pic} width="100%" height="100%" />
        </div>
    )

}

function Boston() {

    return (
        <div> 
            
            {bostonPics.map(pic => (
                <img className="Image" src={"../photos/Boston/" + pic} width="20%" height="20%" onClick={pic => imageGallery(pic)}/>
            ))}
        </div>
        
    );
}

export default Boston;