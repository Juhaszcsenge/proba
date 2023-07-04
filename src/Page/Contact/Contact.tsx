import React, { useState, useRef } from "react";
import emailjs from "emailjs-com"; // itt az emailjs-com csomagra változtattam



const Result = () => {
  return (
    <p>Az üzeneted sikeresen elküldve. Hamarosan felveszem veled a kapcsolatot.</p>
  );
};


function Contact() {
  const [result, showResult] = useState(false);
  const form = useRef<HTMLFormElement>(null); // Ref típus explicit megadása

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) { // Ellenőrizzük, hogy 'form.current' nem undefined vagy null
      emailjs
        .sendForm('service_qixq8iw', 'template_rlwg9xk', form.current, '7HeiuGPg0w2b4sknv')
        .then(
          (result: any) => {
            console.log(result.text);
          },
          (error: any) => {
            console.log(error.text);
          }
        );
      e.currentTarget.reset();
      showResult(true);
    } else {
      console.error("A form nem található.");
    }
  };

  return (
    <form action="" onSubmit={sendEmail} ref={form}>
      <div className="formWord">
        <h2>Say hello!</h2>
        <span>Teljes Név</span>
        <br />
        <input className="input100" type="text" name="fullname" required />
        <br />
        <span>Telefonszám</span>
        <br />
        <input className="input100" type="text" name="phone" required />
        <br />
        <span>Adja meg Email címét</span>
        <br />
        <input className="input100" type="text" name="email" required />
        <br />
      </div>
      <div className="formWord">
        <span>Üzenet</span>
        <input className="input100" type="text" name="message" required />
        <br />
        <button>Küldés</button>
        <div className="row">{result ? <Result /> : null}</div>
      </div>
    </form>
  );
}

export default Contact;
