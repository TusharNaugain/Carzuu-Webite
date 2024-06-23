import React from "react";
import img from "./cars.jpeg"; // Assuming you have an image in the same directory
import styles from "./Home.module.css"; // Import the CSS module

function App() {
  return (
    <div
      className={styles.home} 
      style={{
        backgroundImage: `url(${img})`
      }}
    >
      <h1>
        Hey, Welcome to Our Website Where You Can Explore the Cars
      </h1>
      <p>
        Giving You Service is Our First Priority
      </p>
    </div>
  );
}

export default App;
