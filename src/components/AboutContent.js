import React from "react";
import ImageCarousel from './ImageCarousel'

// Build that as much beautiful as possible


function AboutContent() {
    
    const images = require
    .context("../assets/img", false, /\.webp$/)
    .keys()
    .map((file) => require(`../assets/img/${file.replace("./", "")}`));


    return (
        <>
            <br></br>
            <br></br>
            <br></br>
            <ImageCarousel images={images} interval={5000}/>
            
        </>    
    );
}

export default AboutContent;
