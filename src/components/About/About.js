import aboutImage from "../../images/about.png";

function About() {
  return (
    <div className="about">
      <img className="about__image" src={aboutImage} alt="about" />
      <div className="about__content">
        <h2 className="about__title">About the author</h2>
        <p className="about__text">
          This block describes the project author. Here you should indicate your
          name, what you do, and which development technologies you know.
        </p>
        <p className="about__text">
          You can also talk about your experience with Practicum, what you
          learned there, and how you can help potential customers.
        </p>
      </div>
    </div>
  );
}

export default About;
