import "./Home.css";
import homeImage from "../../Assets/home-sm.png";
import homeIcon from "../../Assets/bg-icon-home.png";
import Header from "../Header/Header";

const Home = () => {
  const mobile = window.innerWidth < 768 ? true : false;

  return (
    <div className="home">
      <Header />
      <div className="home-icon">
        <img src={homeIcon} alt="icon" />
      </div>
      <div className="left-h">
        <div className="home-image">
          <img src={homeImage} alt="home-main" />
        </div>
      </div>
      <div className="right-h">
        <div className="home-text">
          <h2>Your headline goes here</h2>
          {mobile === false ? (
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
              iure mollitia ex beatae voluptas voluptatum eligendi enim totam
              possimus.
            </p>
          ) : null}
        </div>
        <div className="home-link">
          <button>Acount Analyst</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
