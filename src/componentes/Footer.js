import logo from "../imagens/sitio.svg";
import mail from "../imagens/mail.svg";
import phone from "../imagens/phone.svg";

import '../css/footer.css';

function Footer() {
  return (
    <div id="barfooter">
      <div className="row" id="footer">
        <div className="col-lg-5 tab">
          <img src={logo} alt="sitio"></img>

          <p className="textfooter">
            Localidade, povoação, terreno ou local... ou então um projeto que
            engloba todas as exposições, galerias e muito mais de um determinado
            distrito português!
          </p>

          <p>A bem dita “arte” compactada num só website!</p>
        </div>

        <div className="col-lg-3 tab" id="footerContact">
          <img src={mail} alt="mail"></img>
          <p>geral@sitio.com</p>
          <img src={phone} alt="phone"></img>
          <p>+351987654321</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
