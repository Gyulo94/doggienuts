import React, { useState, useEffect, useRef } from "react";
import mainBg from "../../assets/img/mainBg.png";
import section01 from "../../assets/img/section01.png";
import styles from "./Main.module.css";

export default function Main() {
  const [position, setPosition] = useState(0);
  const sectionRef = useRef(null);

  function onScroll() {
    setPosition(window.scrollY);
  }
  console.log(position);

  // if (position > 400) {
  //   sectionRef.current.style.animation = "disapper 1s ease-out";
  // }
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {}, []);
  return (
    <main>
      <div className={styles.mainBg}>
        <img src={mainBg} alt="main" />
      </div>
      <div className={styles.section01}>
        <img src={section01} alt="section01" />
        <div className={styles.sectionText01} ref={sectionRef}>
          <h2>Doggienuts</h2>
          <div>
            <span>H</span>uman-grade fresh meat and organs
          </div>
          <div>
            <span>P</span>roprietary vitamin and mineral additions
          </div>
          <div>
            <span>S</span>emi-moist formulation with high moisture content
          </div>
          <div>
            <span>C</span>omplete nutritional balance with over 40 essential
            nutrients
          </div>
          <div>
            <span>C</span>ooked at temperatures below 80 degrees to minimize
            nutrient loss
          </div>
          <div>
            <span>A</span>natural diet that can be fed as a staple food
          </div>
        </div>
      </div>
    </main>
  );
}
