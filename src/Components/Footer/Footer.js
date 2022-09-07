import "./Footer.css";
import instagram from "../../Assets/instagram-footer.png";
import facebook from "../../Assets/facebook-footer.png";
import linkedin from "../../Assets/linkedin-footer.png";
import netMain from "../../Assets/image-net-main.png";
import netOne from "../../Assets/image-net-one.png";
import netTwo from "../../Assets/image-net-two.png";
import netThree from "../../Assets/image-net-three.png";
import netFour from "../../Assets/image-net-four.png";
import kame from '../../Assets/8.png'
import { Link } from "react-scroll";

const Footer = () => {
  const mobile = window.innerWidth < 768 ? true : false;
  return (
    <section className="footer">
      <div className="footer-top" id="contact">
        <div className="footer-top-text">
          <p>
            If you are interested in receiving information leave us your email
          </p>
        </div>
        <div className="footer-top-form">
          <input type="text" placeholder="Enter your email" />
          <button>Send</button>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="logo">
          {mobile === true ? <h2>Mary J Watson</h2> : <h2>Logotipo</h2>}
        </div>
        <div className="footer-bottom-menu">
          <ul>
            <li>
              <Link activeClass="active" to="about" smooth={true}>About</Link>
            </li>
            <li>
              <Link activeClass="active" to="services" smooth={true}>Services</Link>
            </li>
            <li>
              <Link activeClass="active" to="contact" smooth={true}>Contact</Link>
            </li>
          </ul>
        </div>
        <div className="footer-bottom-networks">
          <p>Follow me</p>
          <ul>
            <li>
              <img src={facebook} alt="facebook" />
            </li>
            <li>
              <img src={instagram} alt="imstagram" />
            </li>
            <li>
              <img src={linkedin} alt="linkedin" />
            </li>
          </ul>
          {mobile === false ? (
            <div className="networks-grid">
              <div className="main-image">
                <img src={netMain} alt="media" />
              </div>
              <div className="image">
                <img src={netOne} alt="media" />
              </div>
              <div className="image">
                <img src={netTwo} alt="media" />
              </div>
              <div className="image">
                <img src={netThree} alt="media" />
              </div>
              <div className="image">
                <img src={netFour} alt="media" />
              </div>
            </div>
          ) : null}
        </div>
          <div className="designed">
            ©2022 - Diseñado por Agencia Kame
            <img src={kame} alt='kame'/>
          </div>
      </div>
    </section>
  );
};

export default Footer;
