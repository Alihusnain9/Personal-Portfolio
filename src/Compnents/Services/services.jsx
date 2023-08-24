import React from "react";
import "./services.css";
import SimpleSlider from "./ServiceItem";
export default function services() {
  const handleClick = (e) => {
    e.preventDefault();
    let a = document.querySelector(".hide");
    a.classList.add("hideshow");
    document.querySelector(".show").style.display = "none";
  };
  return (
    <div id="services">
      <section className="head">
        <h4>|| About</h4>
        <h2>About Me</h2>
        <p
          style={{ fontSize: "17px", fontWeight: "normal", textAlign: "left" }}
        >
          Hello,' I am Ali Husnain a passionate frontend developer with expertise in React.js.I am from Harunabad, bwn, pakistan. I have
          recently did my Intermediate from Harunabad and now I am going to
          take admission in Software-Engeneering.
          I have no professional experience yet.
          I love React.js and My passion is to learn more and more about React.js.
          Becoming a full-stack developer is also one of my goals. I want to use React as a frontend and node.js for backend development
          I can create responsice, beautiful, and functional websites that are easy for users to navigate through.

          <br />
          {" "}
          <button className="show" onClick={(e) => handleClick(e)}>
            see more
          </button>
          <span
            className="hide"
            style={{
              fontSize: "17px",
              fontWeight: "normal",
              textAlign: "left",
              color: "rgb(215, 212, 212)",
              paddingBottom: "4px",
            }}
          >
            I invite you to explore my portfolio to see examples of my work and learn more about my expertise.
            <br />
            If you're looking for a passionate and skilled front-end developer,
            feel free to reach out to me. I would love to discuss how I can
            contribute to your next project.
          </span>
        </p>
        <h6 style={{ color: "white", fontSize: "22px", paddingBottom: "6px" }}>
          I Can Work As{" "}
        </h6>

        <div className="items">
          <SimpleSlider />
        </div>
      </section>
    </div>
  );
}
