import React from "react";
import Navigation from "./Navigation"


function Image() {
    return (
        <div className="topContainer"> 
            {/* <img className="Birds" src="../photos/birds.jpg" width="100%" height="100%" alt="A flock of birds in flight."/> */}
            <div className="Intro" >
                <h1> I'm Khai</h1>
                <hr align="left" />
                <p> An amateur film photographer.</p>
                <Navigation />
            </div>
        </div>
    );
}

export default Image;