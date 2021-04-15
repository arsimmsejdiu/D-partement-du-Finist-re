import React from "react";
import about from "../img/climat.png";

function ImageSection() {
  return (
    <div className="ImageSection">
      <div className="about-info">
        <h4>
          Climat<span> Département du Finistère</span>
        </h4>
        <p className="about-text">
          Le climat du Finistère présente les caractéristiques d'un climat
          tempéré océanique sous l'influence du Gulf Stream et des perturbations
          atlantiques.
          <br />
          <br />
          Il se caractérise généralement par des hivers doux et des étés frais.
          Les précipitations sont assez abondantes et étalées sur toute l'année,
          avec un maximum durant les mois d'hiver. Elles augmentent sensiblement
          à l'intérieur des terres et sur le relief. Alors que l'île d'Ouessant
          reçoit moins de 800 mm de précipitations par an, les sommets des monts
          d'Arrée reçoivent plus de 1 500 mm. Les gelées ainsi que la neige sont
          rares, surtout dans les îles. La présence du vent est une autre
          caractéristique de ce climat.
          <br />
          <br />
          La zone marine à l'ouest du Finistère se nomme mer d'Iroise. Elle
          inclut plusieurs îles ou îlots dont : Ouessant et l'archipel de
          Molène, l'île de Batz, l'île de Sein au large de la pointe du Raz et
          l'archipel des Glénan au sud.
        </p>
        <button className="btn">Lire la suite</button>
      </div>
      <div className="img">
        <img src={about} alt="" />
      </div>
    </div>
  );
}

export default ImageSection;
