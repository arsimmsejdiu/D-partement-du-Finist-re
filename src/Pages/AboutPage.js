import React from "react";
import Tittle from "../Components/Tittle";
import ImageGallery from "../Components/ImageGallery";
//import SkillsSection from "../Components/SkillsSection";
import ServicesSection from "../Components/ServicesSection";
import heart from "../img/heart.png";
import backpack from "../img/backpack.png";
import familly from "../img/family.png";
import mask from '../img/masks.png';

function AboutPage() {
  return (
    <div className="AboutPage">
      <Tittle title={"Les lieux incontournables"} span={"Les lieux incontournables"} />
      <ImageGallery />
      <Tittle title={"Vos services"} span={"Vos services"} />
      <div className="servives-container">
        <ServicesSection
          image={heart}
          title={"Action Social / CDAS"}
          text={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
        />
        <ServicesSection
          image={backpack}
          title={"Collèges"}
          text={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
        />
        <ServicesSection
          image={familly}
          title={"Enfance / Famille"}
          text={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
        />
        <ServicesSection
          image={mask}
          title={"Culture"}
          text={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
        />
      </div>
    </div>
  );
}

export default AboutPage;
