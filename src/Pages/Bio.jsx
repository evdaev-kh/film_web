import React from "react";

function Bio() {

    return (
        <div className="Bio_Body">
            <h2 > Short Bio </h2>
            <p >
                I was born in Quba, Azerbaijan: a multi-ethnic community and a home for the Mountain (Kavkazi) Jews.
                Since then, I have lived in 4 different countries and immersed myself in many cultures.
                My undergraduate journey began at Northeastern University and ended at Boston University.
                I majored in 4 fields: mathematics, CS, philosophy and economics. More importantly, I met many amazing people
                who have shaped and influenced both my intellectual and personal growth.
            </p>
            <p>
                My current goal as an academic is to study theoretical CS with the intent of application to problems
                in genomics, phylogenetics, systems biology and disease spread. Unocovering the mystery that is the 
                human genetics is, I believe, one of the greatest intellectual challenges of the 21st century.
            </p>
            <p>
                I am also passionate about philosophy and languages.
            </p>
            {/* <img src="../photos/kavkazi2.jpg" height="400" width="400"></img> */}
        </div>
        
    );
}

export default Bio;