import React from 'react';
import '../styles/content.css'; // Create a separate CSS file for styling
import Carousel from './ImageCarousel';

const images = require
  .context("../assets/img", false, /\.webp$/)
  .keys()
  .map((file) => require(`../assets/img/${file.replace("./", "")}`));


const Content = () => {
    return (
        <div className="content">
            
            <Carousel images={images} autoPlayTime={5000}/>
        </div>
    );
};

export default Content;
