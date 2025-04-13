import React from "react";
import ImageCarousel from "./ImageCarousel";
import "../styles/about.css";
import Footer from "./Footer";
import '../styles/footer.css'

function AboutContent() {
  const images = require
    .context("../assets/img", false, /\.webp$/)
    .keys()
    .map((file) => require(`../assets/img/${file.replace("./", "")}`));

  return (
    <>
      <br />
      <br />
      <br />
      <ImageCarousel images={images} interval={5000} />
      <div className="our-story">
        <h2>Our Story</h2>
        <p>
          We began our journey with passion and dedication, nurturing a vision
          that was as bold as it was humble.
        </p>
        <p>
          Our early days were filled with relentless experimentation and
          learning, as we built the foundation on creativity and innovation.
        </p>
        <p>
          Facing challenges head-on, we refined our skills and embraced every
          opportunity to grow—transforming struggles into stepping stones.
        </p>
        <p>
          Our community, both within and beyond our team, played a pivotal role
          in shaping our path, inspiring us to always put people first.
        </p>
        <p>
          Today, as we look toward the future, our commitment to excellence,
          creativity, and collaboration continues to drive our mission and fuel
          our dreams.
        </p>
      </div>
      <div className="our-team">
        <img
          className="team-img"
          src={require("../assets/img/ai.bitcoin.2.webp")}
          alt="Our Team"
        />
        <div className="team-overlay">
          <h2>Our Team</h2>
          <p>
            Our dedicated team shares a passion for pushing boundaries and
            embracing innovation. United in vision and spirit, we work together
            to create impactful solutions that change lives.
          </p>
          <br></br>
          <br></br>
          <p className="team-description">
            Our team excels through collaboration and creativity, constantly
            driving innovation while delivering exceptional results.
          </p>
        </div>
      </div>

      <Footer/>
    </>
  );
}

export default AboutContent;
