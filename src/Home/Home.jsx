import React, { useEffect } from "react";
import myImg from "../assets/sachin.png";
import Button from "../Components/Button";
import homeStyle from "./Home.module.css";
import { FaDownload } from "react-icons/fa";
import { RiContactsFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    const lines = document.querySelectorAll(`.${homeStyle.fade_in}`);

    lines.forEach((line, index) => {
      setTimeout(() => {
        line.classList.add(homeStyle.visible);
      }, index * 1000);
    });
  }, []);
  return (
    <>
      <div className={homeStyle.main}>
        <div className={homeStyle.container}>
          <div className={homeStyle.info}>
            <h4 className={homeStyle.fade_in}>Hi I Am,</h4>
            <h1 className={homeStyle.fade_in}>Sachin Thak</h1>
            <h3 className={homeStyle.fade_in}>
              Front End Developer And Electronics Engineer
            </h3>
            <p className={homeStyle.fade_in}>
              I am developer, and I love to learn new things about development
              and I want to become the best developer in the world.
            </p>

            <div className={homeStyle.btn}>
              <a href="" className={homeStyle.fade_in}>
                <Button btnText="Download cv" btnIcon={<FaDownload />} />
              </a>
              <NavLink to="/contact" className={homeStyle.fade_in}>
                <Button btnText="Contact me" btnIcon={<RiContactsFill />} />
              </NavLink>
            </div>
          </div>

          <div className={homeStyle.img}>
            <img src={myImg} alt="Sachin thak" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
