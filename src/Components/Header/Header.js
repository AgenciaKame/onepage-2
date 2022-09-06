import "./Header.css";
import openMenu from "../../Assets/menu-icon-hamb.png";
import closeMenu from "../../Assets/close-menu-icon.png";
import listStyle from "../../Assets/list-style-line.png";
import { Link } from "react-scroll";
import { useState } from "react";

const ListItem = ({ name, link, mobile }) => {
  return (
    <li className="list-item">
      {mobile === true ? <img src={listStyle} alt="list-style" /> : null}
      <Link activeClass="active" to={link} smooth={true}>
        {name}
      </Link>
    </li>
  );
};

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const mobile = window.innerWidth < 768 ? true : false;

  return (
    <nav className="header">
      <div className="brand">
        <h2>Mary J Watson</h2>
      </div>
      {menuOpened === false && mobile === true ? (
        <img
          src={openMenu}
          onClick={() => {
            setMenuOpened(true);
          }}
          alt="menu-icon"
        />
      ) : (
        <div className="menu-mobile">
          {mobile === true ? (
            <div className="menu-mobile-icon">
              <img
                src={closeMenu}
                onClick={() => setMenuOpened(false)}
                alt="icon-menu"
              />
            </div>
          ) : null}
          <ul className="menu-items">
            <ListItem name="Services" link="services" mobile={mobile} />
            <ListItem name="About" link="about" mobile={mobile} />
            <ListItem name="Contact" link="contact" mobile={mobile} />
          </ul>
          {mobile === true ? (
            <div className="btn-menu">
              <button>Send a message</button>
            </div>
          ) : null}
        </div>
      )}
    </nav>
  );
};

export default Header;
