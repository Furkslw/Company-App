import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="HL__header section__padding" id="/">
      <div className="HL__header-content">
        <h1 className="gradient__text">
          House Labs<span className="gradient__text-span">s</span>
        </h1>
        <p>
          Şirketinizi profesyonel bir biçimde dijital dünyaya açın. Bizimle çok
          kolay.
        </p>

        <div className="HL__header-content__input">
          {/* <input type='email' placeholder='E-mail adresinizi girin.' /> */}

          <Link href={"#services"}>
            <button type="button">Hizmetlere Göz Atın</button>
          </Link>
        </div>

        {/* <div className="HL__header-content__people">
          <img src="./assets/people.png" alt="people"/>
          <p>1,452 kişi 24 saat içerisinde bizimle iletişime geçti.</p>
      </div>
    */}
      </div>
      <div className="HL__header-image">
        <img src="./assets/ai.png" alt="header-image" />
      </div>
    </div>
  );
};

export default Header;
