import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./About.css";

const About = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="about-container">
      <header className="about-header">
        <h1 className="animated fadeInDown">Welcome to Carzuu</h1>
      </header>
      <section className="about-content">
        <p className="animated fadeInUp">
          At Carzuu, we are passionate about providing top-notch car servicing
          solutions that ensure your vehicle is always running smoothly and
          safely. Our mission is to offer reliable, affordable, and convenient
          car maintenance services that meet the needs of our diverse clientele.
        </p>
        <h2 className="animated fadeInUp">Our Story</h2>
        <Slider {...settings} className="carousel">
          <div>
            <p className="animated fadeInUp">
              Founded in 2024, Carzuu began with a simple idea: to
              revolutionize the car servicing industry. We recognized the common
              hassles car owners face when it comes to vehicle maintenance and
              decided to create a platform that simplifies the process. From
              regular oil changes to complex repairs, Carzuu is your
              one-stop-shop for all car servicing needs.
            </p>
          </div>
          <div>
            <p className="animated fadeInUp">
              At Carzuu, we believe in transparency, quality, and customer
              satisfaction. Our team of certified mechanics is dedicated to
              providing the best possible service, ensuring that your car gets
              the care it deserves. We use state-of-the-art equipment and follow
              industry best practices to deliver exceptional results.
            </p>
          </div>
          <div>
            <p className="animated fadeInUp">
              Whether you're booking a routine service or need emergency
              repairs, Carzuu is here to help. Our user-friendly website and
              customer service team make it easy to schedule appointments and
              get the information you need.
            </p>
          </div>
        </Slider>
        <h2 className="animated fadeInUp">Our Services</h2>
        <ul className="animated fadeInUp">
          <li>General Car Maintenance</li>
          <li>Oil and Filter Changes</li>
          <li>Brake Inspections and Repairs</li>
          <li>Battery Testing and Replacement</li>
          <li>Engine Diagnostics</li>
          <li>Tire Services</li>
          <li>And much more!</li>
        </ul>
        <h2 className="animated fadeInUp">Contact Us</h2>
        <p className="animated fadeInUp">
          Have questions or need assistance? Feel free to reach out to us. We’re
          here to make your car servicing experience as smooth and hassle-free
          as possible.
        </p>
        <p className="animated fadeInUp">
          <strong>Email:</strong> naugaintushar@gmail.com <br />
          <strong>Phone:</strong>+91 9411767413
          <br />
          <strong>Address:</strong> Bombay, Carzuu Lane, Auto City,
        </p>
      </section>
    </div>
  );
};

export default About;
