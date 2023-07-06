import React, { useState, useRef } from "react";
import GtagClient from "../../../lib/client/gtag";

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const inputs = formRef.current.querySelectorAll("input, textarea");
    const isAnyInputEmpty = Array.from(inputs).some(
      (input) => input.value === ""
    );
    if (isAnyInputEmpty) {
      const button = formRef.current.querySelector('button[type="submit"]');
      button.classList.remove("HL__form-button");
      button.classList.add("HL__form-button-failed");

      button.textContent = "Tekrar Deneyin";
      setTimeout(() => {
        button.classList.remove("HL__form-button-failed");
        button.classList.add("HL__form-button");
        button.textContent = "Gönder";
      }, 2000);
    } else {
      setIsSubmitted(true);
    }

    const gtagData = {};
    inputs.forEach((element) => {
      console.log(element);
      gtagData[element.id] = element.value;
    });

    GtagClient.send("form-submit", gtagData);
  };

  return (
    <div className="HL__form-container section__padding" id="pricing">
      <h1 className="gradient__text">
        Şirketinizi dijitalleştirmenin ilk adımını atın.
      </h1>
      <p>Bize ulaşın.</p>
      <form ref={formRef} onSubmit={handleSubmit}>
        <div className="HL__form-number">
          <label htmlFor="name">Ad Soyad</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Adınız ve Soyadınız"
          />
        </div>
        <div className="HL__form-number">
          <label htmlFor="email">E-posta</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="example@email.com"
          />
        </div>
        <div className="HL__form-number">
          <label htmlFor="number">Telefon Numarası</label>
          <input
            type="number"
            id="number"
            name="number"
            placeholder="0536 123 56 78"
          />
        </div>
        <div className="HL__form-number">
          <label htmlFor="message">Mesajınızı buraya yazabilirsiniz.</label>
          <textarea
            id="message"
            name="message"
            placeholder="Mesajınızı buraya yazınız."
            style={{ height: "200px" }}
          ></textarea>
        </div>
        {isSubmitted ? (
          <div className="HL__form-success">Teşekkürler!</div>
        ) : (
          <button type="submit" className="HL__form-button">
            Gönder
          </button>
        )}
      </form>
    </div>
  );
};

export default Form;
