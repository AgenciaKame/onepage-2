import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Testimony.css";

const Testimony = () => {
  return (
    <section className="testimony">
      <div className="testimony-title">
        <h3>Testimonials</h3>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        className="testimony-slider"
      >
        <SwiperSlide>
          <div className="testimony-box">
            <h2>Me sentí escuchada</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
              iure mollitia ex beatae voluptas voluptatum eligendi enim totam
              possimus, exercitationem asperiores accusamus ullam, atque in?
              Facere aliquam vel repellat consequuntur porro harum rem velit.
            </p>
            <h3>Florencia Marín</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimony-box">
            <h2>Realmente se adaptó a mi</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
              iure mollitia ex beatae voluptas voluptatum eligendi enim totam
              possimus, exercitationem asperiores accusamus ullam, atque in?
              Facere aliquam vel repellat consequuntur porro harum rem velit.
            </p>
            <h3>Victor Herrera</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimony-box">
            <h2>Llegó en el momento indicado</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
              iure mollitia ex beatae voluptas voluptatum eligendi enim totam
              possimus, exercitationem asperiores accusamus ullam, atque in?
              Facere aliquam vel repellat consequuntur porro harum rem velit.
            </p>
            <h3>Marc González</h3>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Testimony;
