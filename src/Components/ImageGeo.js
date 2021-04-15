import React from "react";
import about from "../img/geo.png";

function ImageSection() {
  return (
    <div className="ImageSection">
      <div className="img">
        <img src={about} alt="" />
      </div>
      <div className="about-info">
        <h4>
          Géographie<span> Département du Finistère</span>
        </h4>
        <p className="about-text">
          Le Finistère est situé à l'extrémité ouest de la Bretagne. Il est
          bordé au nord, à l'ouest et au sud par la Manche, la Mer Celtique
          (intégrant la mer d'Iroise) et l'océan Atlantique.
          <br />
          <br />
          Premier département côtier de France, il compte 117 communes
          littorales sur 282, soit plus d'un dixième des communes littorales
          françaises, et 1 250 km de côtes, soit près d'un quart du littoral
          français. La côte est en effet très découpée et se divise en caps :
          cap Sizun ; en baies : rade de Brest, baie de Douarnenez, baie
          d'Audierne, baie de Concarneau, en presqu'îles : presqu'île de Crozon
          et en rias : Laïta, Aven, Bélon, Odet, Aber Wrac'h, rivière de
          Morlaix.
          <br />
          <br />
          La zone marine à l'ouest du Finistère se nomme mer d'Iroise. Elle
          inclut plusieurs îles ou îlots dont : Ouessant et l'archipel de
          Molène, l'île de Batz, l'île de Sein au large de la pointe du Raz et
          l'archipel des Glénan au sud.
        </p>
        <button className="btn">Lire la suite</button>
      </div>
    </div>
  );
}

export default ImageSection;
