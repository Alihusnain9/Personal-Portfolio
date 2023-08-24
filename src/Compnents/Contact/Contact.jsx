import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
export default function Contact() {
  const [msg, setMsg] = useState(false);
  const [value, setValue] = useState({
    name: "",
    Email: "",
    area: "",
  });
  const [err, setErr] = useState({
    name: false,
    Email: false,
    area: false,
  });

  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const nameRegex = /^[A-Za-z0-9]{3,16}$/;
    const areaRegex = /^[A-Za-z0-9.]{10,1000}$/;

    if(!nameRegex.test(value.name)) {
      setErr({ ...err, name: true });
    } else if (!emailRegex.test(value.Email)) {
      setErr({ ...err, Email: true });
    } else if (!areaRegex.test(value.area)) {
      setErr({ ...err, area: true });
    } else {
setErr({
  name: false,
  Email: false,
  area: false,
})

      emailjs
        .sendForm(
          "service_efkueod",
          "template_t9mj75j",
          form.current,
          "ciWvzALRa60t_ZUL1"
        )
        .then(
          (result) => {
            console.log(result.text);
            setMsg(true);
            setValue({
              Email: "",
              name: "",
              area: "",
            });
            setTimeout(() => {
              setMsg(false);
            }, 5000);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  }

  return (
    <div id="contact">
      <div className="csection">
        <h5>|| CONTACT</h5>
        <h2>Contact with me</h2>
        <div className="sec-section">
          <form
            className="coninfo"
            ref={form}
            onSubmit={sendEmail}
            autoComplete="off"
          >
            <div className="name">
              <span>
                <label htmlFor="name">YOUR NAME</label>
                <input
                  pattern="^[A-Za-z0-9]{3,16}$"
                  type="text"
                  id="name"
                  name="from_name"
                  value={value.name}
                  onChange={(e) => setValue({ ...value, name: e.target.value })}
                />
                {err.name && (
                  <div  style={{ color: "red",display:'block',marginTop:0}}>
                    Please Enter 3-16 characters name
                  </div>
                )}
              </span>
              <span>
                <label htmlFor="num">PHONE NUMBER (optional)</label>
                <input type="tel" id="num" name="phone_num" />
              </span>
            </div>
            <div className="mail">
              <label htmlFor="mail">E-MAIL</label>
              <input
                value={value.Email}
                onChange={(e) => setValue({ ...value, Email: e.target.value })}
                type="email"
                id="mail"
                name="from_email"
              />
              {err.Email && (
                <span style={{ color: "red" }}>
                  Please Enter a valid E-mail
                </span>
              )}
            </div>
            <div className="area">
              <label htmlFor="area">YOUR MESSAGE</label>
              <textarea
            
                value={value.area}
                onChange={(e) => setValue({ ...value, area: e.target.value })}
                name="message"
                placeholder="Type atleast 10 words message...."
                id="area"
                cols="30"
                rows="5"
              />
              {/* {err.area && (<span>Please type some thing for developer</span>)} */}
            </div>
            <button className="butn" type="submit">
              SEND MESSAGE
            </button>
            {msg && (
              <span style={{ color: "green", fontWeight: "bold" }}>
                Message has been sent successfully
              </span>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
