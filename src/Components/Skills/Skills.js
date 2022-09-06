import "./Skills.css";
import Slider from "react-slick";
import { skills, skillDivisors } from "../../Data/Data";

const Skills = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const mobile = window.innerWidth < 768 ? true : false;

  return (
    <div className="skills">
      <div className="skills-title">
        <h2>You must indicate what your profession is or what you do</h2>
      </div>
      {mobile === true ? (
        <div className="skills-slider">
          <Slider {...settings}>
            {skills.map((skill, idx) => {
              return (
                <div className="skill" key={idx}>
                  <img src={skill.image} alt="skill-pic" />
                  <h3>{skill.title}</h3>
                  <p>{skill.text}</p>
                </div>
              );
            })}
          </Slider>
        </div>
      ) : (
        <div className="skills-desktop">
          <div className="skill">
            <img src={skills[0].image} alt="skill-pic" />
            <h3>{skills[0].title}</h3>
            <p>{skills[0].text}</p>
          </div>
          <img src={skillDivisors[0].image} className="line" alt="line" />
          <div className="skill">
            <img src={skills[1].image} alt="skill-pic" />
            <h3>{skills[1].title}</h3>
            <p>{skills[1].text}</p>
          </div>
          <img src={skillDivisors[0].image} className="line" alt="line" />
          <div className="skill">
            <img src={skills[2].image} alt="skill-pic" />
            <h3>{skills[2].title}</h3>
            <p>{skills[2].text}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Skills;
