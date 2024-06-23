import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Home.module.css";
import img from "./images/cars.jpeg";
import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";
import img4 from "./images/img4.jpg";
import img5 from "./images/img5.jpg";
import img6 from "./images/img6.jpg";

const App = () => {
  const mainCarouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const serviceTexts = [
    "General Car Maintenance",
    "Oil and Filter Changes",
    "Brake Inspections and Repairs",
    "Battery Testing and Replacement",
    "Engine Diagnostics",
    "Tire Services",
    "And much more!",
  ];

  const images = [img1, img2, img3, img4, img5, img6]; 

  return (
    <div className={styles.container}>
      <div className={styles.home} style={{ backgroundImage: `url(${img})` }}>
        <h1>Hey, Welcome To Our Website Where You Can Explore the Cars</h1>
        <p>Giving You Service is Our First Priority</p>
      </div>

      <div className={styles.carouselContainer}>
        <Slider {...mainCarouselSettings} className={styles.carousel}>
          {images.map((image, index) => (
            <div key={index} className={styles.carouselSlide}>
              <div
                className={styles.carouselImage}
                style={{ backgroundImage: `url(${image})` }}
              >
                <div className={styles.carouselText}>
                  <p>{serviceTexts[index % serviceTexts.length]}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <section className={styles.testimonials}>
        <h2>Testimonials</h2>
        <div className={styles.testimonialBox}>
          <p>
            "Carzuu provides excellent service! My car has never run better."
          </p>
        </div>
        <div className={styles.testimonialBox}>
          <p>
            "Fast, reliable, and affordable. Highly recommend Carzuu!"
            Smith
          </p>
        </div>
      </section>

      <section className={styles.contact}>
        <h2>Contact Us</h2>
        <div className={styles.contactBox}>
          <p>
            <strong>Email:</strong> naugaintushar@gmail.com
          </p>
          <p>
            <strong>Phone:</strong> 8178788995 
          </p>
          <p>
            <strong>Address:</strong> 123 Carzuu Lane, Auto City, XYZ 12345
          </p>
        </div>
      </section>

      <footer className={styles.footer}>
        <p>© 2024 Carzuu. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default App;
