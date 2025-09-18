import "./about.scss";
import aboutImage from "./porfolio.webp";

function About() {
  return (
    <div>
      <div className="container">
        <div className="about-us">
          <h2>
            <u>About Us</u>
          </h2>
        </div>

        <div className="about-us-contents">
          <div className="portfolio">
            <img
              src={aboutImage}
              alt="portfolio-image"
              width="400px"
              height="500px"
            ></img>
          </div>
          <div className="description">
            <p>
              At Event Management, we believe every event is more than just a
              gathering—it’s a story waiting to be told. Our mission is to
              transform your vision into unforgettable experiences, filled with
              creativity, precision, and a touch of magic. From intimate
              celebrations to grand corporate events, we specialize in planning,
              designing, and executing seamless occasions that reflect your
              personality, style, and goals. With a passionate team of event
              enthusiasts, we focus on:
              <li>
                <b>Creative Concepts</b>– Innovative themes, décor, and
                experiences that wow your guests.
              </li>
              <li>
                <b>Flawless Execution</b>- Timely coordination and professional
                management from start to finish.
              </li>
              <li>
                <b>Personalized Planning</b>- Every event is unique, so we
                tailor every detail to your needs.
              </li>
              Whether it’s a wedding, corporate function, birthday, concert, or
              cultural fest, we go beyond just organizing—we create memories
              that last a lifetime. At Event Management, your dream event is our
              responsibility. Relax, enjoy, and leave the rest to us..
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;