import "./Footer.css";
import instagram from "../../Assets/instagram-footer.png";
import facebook from "../../Assets/facebook-footer.png";
import linkedin from "../../Assets/linkedin-footer.png";
import netMain from "../../Assets/image-net-main.png";
import netOne from "../../Assets/image-net-one.png";
import netTwo from "../../Assets/image-net-two.png";
import netThree from "../../Assets/image-net-three.png";
import netFour from "../../Assets/image-net-four.png";
import kame from "../../Assets/8.png";
import { Link } from "react-scroll";
import { useState } from "react";
import { useEffect } from "react";

const Footer = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [images, setImages] = useState([]);
  useEffect((images) => {
    const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink,thumbnail_url&access_token=${process.env.REACT_APP_TOKEN}`;
    setImages([]);
    setTimeout(() => {
      fetch(url)
        .then((res) => res.json())
        .then((json) => {
          let posts = json.data;
          for (let i = 0; i < posts.length; i++) {
            setImages((images) => [...images, posts[i].media_url]);
          }
          setIsLoading(false);
        });
    }, 100);
  }, []);

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
              <Link activeClass="active" to="about" smooth={true}>
                About
              </Link>
            </li>
            <li>
              <Link activeClass="active" to="services" smooth={true}>
                Services
              </Link>
            </li>
            <li>
              <Link activeClass="active" to="contact" smooth={true}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-bottom-networks">
          <p>Follow me</p>
          <ul>
            <li>
              <a href="https://www.instagram.com/agenciakame/" target='__blank'>
                <img src={facebook} alt="facebook" loading="lazy" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/agenciakame/" target='__blank'>
                <img src={instagram} alt="imstagram" loading="lazy" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/agencia-kame/" target='__blank'>
                <img src={linkedin} alt="linkedin" loading="lazy" />
              </a>
            </li>
          </ul>
          {mobile === false ? (
            <div className="networks-grid">
              {isLoading === true ? (
                <>
                  <div className="main-image">
                    <a href="https://www.instagram.com/agenciakame/" target='__blank'>
                      <img src={netMain} alt="media" loading="lazy" />
                    </a>
                  </div>
                  <div className="image">
                    <a href="https://www.instagram.com/agenciakame/" target='__blank'>
                      <img src={netOne} alt="media" loading="lazy" />
                    </a>
                  </div>
                  <div className="image">
                    <a href="https://www.instagram.com/agenciakame/" target='__blank'>
                      <img src={netTwo} alt="media" loading="lazy" />
                    </a>
                  </div>
                  <div className="image">
                    <a href="https://www.instagram.com/agenciakame/" target='__blank'>
                      <img src={netThree} alt="media" loading="lazy" />
                    </a>
                  </div>
                  <div className="image">
                    <a href="https://www.instagram.com/agenciakame/" target='__blank'>
                      <img src={netFour} alt="media" loading="lazy" />
                    </a>
                  </div>
                </>
              ) : (
                <>
                  {images.map((image, index) => {
                    return (
                      <div
                        key={index}
                        className={index === 0 ? "main-image" : "image"}
                      >
                        <a href="https://www.instagram.com/agenciakame/" target='__blank'>
                          <img src={image} alt="media" />
                        </a>
                      </div>
                    );
                  })}
                </>
              )}
            </div>
          ) : null}
        </div>
        <div className="designed">
          ©2022 - Diseñado por Agencia Kame
          <img src={kame} alt="kame" />
        </div>
      </div>
    </section>
  );
};

export default Footer;
