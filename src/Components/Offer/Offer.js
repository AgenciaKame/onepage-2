import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "./Offer.css";
import logo from "../../Assets/icon-offer-box.png";

const data = [
  {
    title: "TITLE OR HEADING WILL GO HERE 1",
    text: "Im baby portland put a bird on it blog letterpress bitters yuccie. Im baby portland put a bird on it blog letterpress bitters yuccie.",
  },
  {
    title: "TITLE OR HEADING WILL GO HERE 2",
    text: "Im baby portland put a bird on it blog letterpress bitters yuccie. Im baby portland put a bird on it blog letterpress bitters yuccie.",
  },
  {
    title: "TITLE OR HEADING WILL GO HERE 3",
    text: "Im baby portland put a bird on it blog letterpress bitters yuccie. Im baby portland put a bird on it blog letterpress bitters yuccie.",
  },
];

const Offer = () => {
  /* const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }; */

  const mobile = window.innerWidth < 768 ? true : false;

  return (
    <section className="offers" id="services">
      <div className="top"></div>
      {mobile === false ? (
        <div className="offers-title">
          <h3>Why choose me</h3>
          <h2>What I offer</h2>
        </div>
      ) : null}
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          }
        }}
        modules={[Pagination]}
        className="offer-slider"
      >
        {data.map((offer, index) => {
          return (
            <SwiperSlide className="offer-box" key={index}>
              <div>
                <img src={logo} alt="icon-box" />
              </div>
              <h3>{offer.title}</h3>
              <p>{offer.text}</p>
              <span>Read more</span>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="bottom"></div>
    </section>
  );
};

export default Offer;
