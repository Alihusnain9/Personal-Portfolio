import React, { useEffect, useRef, useState } from "react";
import "./Navbar.css";
import Image2 from "../../assets/mypic8.png";
export default function Navbar() {
  const handleClik = () => {
    document.querySelector(".sidebar").classList.toggle("away");
  };

  useEffect(() => {
    function hidebar() {
      if (window.innerWidth > 550) {
        document.querySelector(".sidebar").classList.add("away");
      }
    }

    window.addEventListener("resize", hidebar);

    return () => window.removeEventListener("resize", hidebar);
  }, []);

  const refer = useRef();
  useEffect(() => {
    const handle = () => {
      if (refer.current) {
        refer.current.classList.toggle("active", window.scrollY > 120);
      }
    };
    window.addEventListener("scroll", handle);
    return () => window.removeEventListener("scroll", handle);
  }, []);

  const [active, setActive] = useState("home");
  const handleclick = (e, page) => {
    e.preventDefault;
    setActive(page);
    setTimeout(() => {
      document.querySelector('.sidebar').classList.add('away')
      
    }, 300);
  };

const sidebarRef = useRef()

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        // Close the sidebar here
        console.log('Closing sidebar');
        document.querySelector('.sidebar').classList.add('away')
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return (
    <div className="navbr" ref={refer}>
      <div className="navbar" id="navbar" >
        <div className="header1">
          <div className="header">
              <h3>
            <a href="#">
                AL<span>I</span> HU<span>S</span>NA<span>I</span>N
            </a>
              </h3>
            <i
              className="fa-solid fa-bars"
              id="fa-bars"
              onClick={handleClik}
            ></i>
            <ul>
              <li>
                <a
                  href=" #home"
                  className={active === "home" ? "active" : ""}
                  onClick={(e) => handleclick(e, "home")}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className={active === "services" ? "active" : ""}
                  onClick={(e) => handleclick(e, "services")}
                >
                  About Me
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className={active === "portf" ? "active" : ""}
                  onClick={(e) => handleclick(e, "portf")}
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className={active === "contact" ? "active" : ""}
                  onClick={(e) => handleclick(e, "contact")}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="sidebar away" id="sidebar" ref={sidebarRef}>
        <div className="rel">
          <i className="fa-solid fa-xmark" onClick={handleClik}></i>
          <div className="img">
            <img src={Image2} alt="Image" />
          </div>
          <ul>
            <li>
              <a
                href=" #home"
                className={active === "home" ? "active" : ""}
                onClick={(e) => handleclick(e, "home")}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#services"
                className={active === "services" ? "active" : ""}
                onClick={(e) => handleclick(e, "services")}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                className={active === "portf" ? "active" : ""}
                onClick={(e) => handleclick(e, "portf")}
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={active === "contact" ? "active" : ""}
                onClick={(e) => handleclick(e, "contact")}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
