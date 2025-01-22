import React from "react";
import Navigation from "./Navigation"


function Image() {
    return (
        <div className="topContainer"> 
            {/* <img className="Birds" src="../photos/birds.jpg" width="100%" height="100%" alt="A flock of birds in flight."/> */}
            <div className="Intro" >
                <h1> I'm Khai</h1>
                <hr align="left" />
                <p>ἕν οἶδα, ὅτι οὐδὲν οἶδα </p>
                <p>
                Here you'll find my academic bio, links to code and some quibbles about mathematics, CS and philosophy.
                </p>
                <Navigation />
            </div>
        </div>
    );
}

export default Image;