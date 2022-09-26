import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "./Offer.css";
import logo from "../../Assets/icon-offer-box.png";

const data = [
  {
    title: "Maneja tu ansiedad",
    text: "Programa de 6 semanas para aprender a gestionar ansiedad física, mental y emocional.",
  },
  {
    title: "Orientación vocacional",
    text: "Aplicación de test y entrevista vocacional para definir tu carrera.",
  },
  {
    title: "Sesión individual",
    text: "Sesión de 60 minutos de psicoterapia online.",
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
          <h3>¿Cómo puedo ayudarte?</h3>
          <h2>Mis propuestas</h2>
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
              <button>+ info</button>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="bottom"></div>
    </section>
  );
};

export default Offer;
