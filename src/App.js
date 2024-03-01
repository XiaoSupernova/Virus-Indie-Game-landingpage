import React from "react";
import "./index.js";
import styles from "./style.js";
import {
  Alertbar,
  Collaborators,
  Footer,
  Hero,
  Navbar,
  NewRelease,
  Testimonials,
  QuestionBar,
  TopReleaseCards,
} from "./components";

// connect the indie game API list: Picture, name, releasetime, publisher
// const indieGameAPI = ""
const App = () => (
  <div className="w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <Navbar />
    </div>

    <div className={`${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`${styles.flexCenter}`}>
      {" "}
      <div className={`${styles.boxWidth}`}>
        <Alertbar />
      </div>
    </div>

    <div className={`${styles.flexStart} `}>
      <div className={`${styles.boxWidth}`}>
        {" "}
        <TopReleaseCards /> <Collaborators />
        <QuestionBar /> <Footer />
      </div>
    </div>
  </div>
);

export default App;
