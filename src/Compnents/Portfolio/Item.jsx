import React, { useEffect, useState } from "react";
import "./portfolio.css";
import Slider from "react-slick";
import CartUrl from "../../assets/shopping cart pic.png";
import QuizUrl from "../../assets/Quiz pic.png";
import YTUrl from "../../assets/Screenshot 2023-08-19 142306.png";
export default function Item() {
  const [number, setNumber] = useState(2);

  useEffect(() => {
    function hidebar() {
      if (window.innerWidth < 950) {
        setNumber(2);
      }
      if (window.innerWidth > 950) {
        setNumber(3);
      } else if (window.innerWidth < 650) {
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
    <>
      <Slider {...settings}>
        <div className="card">
          <img src={CartUrl} alt="Picture" />
          <div className="cbody">
            <h5>Advance Shopping Cart in React Using Typescript & Bootstrap</h5>
            <p>
              Its design is very beautiful and responsive for all devices. Users
              can add items, adjust quantities, remove products, and view a
              summary of their selected items. It also calculates the total
              cost, including any applicable taxes or discounts.
            </p>
            <div>
              <a
                href="https://64c7141a4de7b1581b518df9--verdant-licorice-217c3d.netlify.app"
                target="_blank"
              >
                <button>
                  view{" "}
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </button>
              </a>

              <a
                href="https://github.com/Alihusnain9/Shopping-Cart"
                target="_blank"
              >
                <button>
                  code <i className="fa-solid fa-code icon"></i>
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="card">
          <img src={QuizUrl} alt="Picture" />
          <div className="cbody">
            <h5>Simle Quiz App in React and Bootstrap</h5>
            <p>
              It is a simple multiple choice questions project fetching data
              from "Opentdb api". It allows users to choose the answer and get
              right answer on the backside of the card by clicking on the
              specific card. Users can select any category and number of
              questions
            </p>
            <div>
              <a
                href="https://64c78994457ce71506868ba6--spontaneous-crostata-a04c5e.netlify.app/"
                target="_blank"
              >
                <button>
                  view{" "}
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </button>
              </a>

              <a href="https://github.com/Alihusnain9/Quiz-App" target="_blank">
                <button>
                  code <i className="fa-solid fa-code icon"></i>
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="card">
          <img src={YTUrl} alt="Picture" />
          <div className="cbody">
            <h5>Modren YouTube Clone in React</h5>
            <p>
              I make this project in React using Material UI for design and
              Rapid API for data.It allows users to view, and interact with
              videos.It has its own categories like sports , games , React.js ,
              Next.js etc.User can also search their favourite videos.Design is
              fully responsive for all devices
            </p>
            <div>
              <a href="https://keen-genie-699024.netlify.app/" target="_blank">
                <button>
                  view{" "}
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </button>
              </a>
              <a
                href="https://github.com/Alihusnain9/Youtube-Clone"
                target="_blank"
              >
                <button>
                  code <i className="fa-solid fa-code icon"></i>
                </button>
              </a>
            </div>
          </div>
        </div>
      </Slider>
    </>
  );
}
