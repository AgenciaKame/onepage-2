import "./Community.css";
import community from '../../Assets/community-image.png'

const Community = () => {
  const mobile = window.innerWidth < 768 ? true : false;
  return (
    <section className="community" id="about">
      <div className="community-title">
        <h2>Heading goes here about your community or offer</h2>
      </div>
      <div className="community-image">
        <img src={community} alt="community-img" />
      </div>
      <div className="community-text">
        {mobile === true ? (
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem
            ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
        ) : (
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
            iure mollitia ex beatae voluptas voluptatum eligendi enim totam
            possimus, exercitationem asperiores accusamus ullam, atque in?
            <br />
            <br />
            Facere aliquam vel repellat consequuntur porro harum rem velit, in
            impedit culpa, cupiditate distinctio dicta laboriosam. Blanditiis
            similique nemo in repellendus, quibusdam possimus nam amet.
          </p>
        )}
        <button>Join my free community</button>
      </div>
    </section>
  );
};

export default Community;
