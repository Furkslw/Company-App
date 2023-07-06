import React from "react";

const Footer = () => {
  return (
    <div className="HL__footer section__padding" id="contact">
      <div className="HL__footer-links">
        <div className="HL__footer-links_logo">
          <img src="./assets/logo.png" alt="logo" width={120} height={50} />
        </div>
        {/* <div className='HL__footer-links_div'>
                <h3>Sosyal Medya</h3>
                <p>Instagram</p>
                <p>Facebook</p>
                <p>Twitter</p>
            </div> */}
        <div className="HL__footer-links_div">
          <h3>Şirket</h3>
          <p>Aydınlatma Metni</p>
          <p>İletişim</p>
          <p>Kullanıcı Sözleşmesi</p>
        </div>
        <div className="HL__footer-links_div">
          <h3>Bilgiler</h3>
          {/* <p>Lorem / lorem / lorem / lorem</p> */}
          <p>+905368763636</p>
          <p>business@houselabss.com</p>
        </div>
      </div>
      <div className="HL__footer-copy">
        <p>© 2023 HouseLabss. Tüm hakları saklıdır.</p>
      </div>
    </div>
  );
};

export default Footer;
