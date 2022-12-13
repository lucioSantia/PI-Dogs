import React from "react";
import { Link } from "react-router-dom";
import style from "../LandingPage/LandingPage.module.css";
import "../LandingPage/ButtonHome.css"

function LandingPage() {
  return (
    <div className={`${style.main_container}`}>
      <div className={`${style.main_left_container}`}>
        <h1 className={`${style.titleApp}`} >DOGPEDIA</h1>
        <div className={`${style.left_paragraph}`}>
          <p>En esta DOGPEDIA vas a poder encontrar diferentes tipos de raza de perritos al igual que tamaños, pesos y esperanza de vida, tambien vas a poder crear un amiguito nuevo</p>
        </div>
        
        <Link to="/home">
            <button className="button_home">Go home</button>
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
