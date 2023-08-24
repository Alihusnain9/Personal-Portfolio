import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "./services.css";
export default function SimpleSlider() {
  const [number, setNumber] = useState(2);

  useEffect(() => {
    function hidebar() {
      if (window.innerWidth < 1160) {
        setNumber(2);
      }
      if (window.innerWidth > 1160) {
        setNumber(3);
      } else if (window.innerWidth < 815) {
        setNumber(1);
      } else if (window.innerWidth > 815) {
        setNumber(2);
      }
    }
    window.addEventListener("resize", hidebar);
    window.addEventListener("load", hidebar);
    return () => {
      window.removeEventListener("resize", hidebar);
      window.removeEventListener("load", hidebar);
    };
  }, []);

  let settings = {
    dots: true,
    dotsClass: "custom-dots",
    infinite: true,
    speed: 500,
    slidesToShow: number,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div className="item">
        <i className="fa-brands fa-css3-alt"></i>
        <h3>Frontend Web Developer</h3>
        <p>I can create UI and UX of websites or applications using Html, CSS, and js. I focus on Responsive design and optimal performance. I use CSS frameworks like bootstrap or CSS media quiries for responsive design. As a frontend developer I can translate visual designs into interactive web pages  </p>
      </div>
      <div className="item">
        <i className="fa-brands fa-js"></i>
        <h3>Javascript Developer</h3>
        <p>JavaScript (JS) is a versatile programming language used for web development. I can implement various modern functionalities and features on web applications. I can build web applications that run entirely in the browser or interact with server-side APIs.I also ensure cross-browser compatibility.</p>
      </div>
      <div className="item">
        <i className="fa-brands fa-react"></i>
        <h3>React Developer</h3>
        <p>React is the most famous library of JS. Which uses component-based architecture, JSX syntax, Virtual Dom, and state management. I can build modern and complex user interfaces using React ecosystem with libraries and tools that enhance development productivity and performance.</p>
      </div>
    </Slider>
  );
}
