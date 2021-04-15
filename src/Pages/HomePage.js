import React from "react";
import ImageHome from '../Components/ImageHome';
import ImageGeo from '../Components/ImageGeo';
import ImageClimat from '../Components/ImageClimat';
import ImageGallery from '../Components/ImageGallery';
import Tittle from "../Components/Tittle";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="AboutPage">
      <div className="hero">
        <h1 className="hero-text">
          Le Département
          <span> du Finistère</span>
        </h1>
        <Tittle title={"L’histoire du département"} span={"L’histoire du département"} />
        <ImageHome />
        <p className="h-sub-text">
          Le Département a été créé en 1790, pendant la Révolution française,
          comme la plupart des départements français Avec une superficie de 6
          733 km2, il compte 911 735 habitants (source INSEE 2018). La moitié
          des Finistériens a moins de 40 ans.
          <br/><br/>
          Le plus occidental et le plus maritime des départements bretons, celui
          du Finistère, était habité, dans la haute antiquité, par un peuple
          dont le nom même était la traduction de sa position géographique :
          c’étaient les Osismii, qui avaient pour capitale Occismor. Occismor,
          en langage celtique, veut dire mer de l’Occident (mor, mer ; oc,
          occident). Ce peuple faisait partie de la confédération armoricaine.
          Il était allié des Vénètes, et fut avec eux à la tête de la résistance
          contre l’invasion romaine.
          <br /><br/>
          Le pays des Osismiens, aussi bien que celui de Vannes, était le foyer
          du druidisme, et nulle part la nature ne fut plus en harmonie avec ce
          culte sombre et terrible. L’horreur règne sur ces côtes, et l’habitant
          de Léon, pensif et retiré en lui-même, semble méditer sur les villes
          anéanties, les cultes effacés et la lutte terrible que le granit
          déchiré de son rivage soutient de toute éternité contre un océan
          furieux. En lui il y a du vieux druide. Il a remplacé par la veste et
          le bragow-braz le long manteau de lin blanc ; il ne consomme plus sur
          les dolmens ensanglantés d’homicides sacrifices, mais il est encore
          familier avec ses menhirs, ses dolmens, ses pierres branlantes ; il
          s’assied à leur ombre ; il les consulte comme des oracles, et
          interroge avec anxiété les mouvements de ces rochers énormes, comme si
          c’étaient des géants pétrifiés qui auraient la connaissance de ce qui
          échappe aux hommes.
        </p>
        <br/><br/>
        <ImageGeo />
        <br/><br/>
        <ImageClimat />
        <br/><br/>
        <ImageGallery />
        <br/><br/>
        <div className="icons">
          <Link to="test" className="icon-holder">
            <FontAwesomeIcon icon={faFacebook} className="icon fb" />
          </Link>
          <Link to="test" className="icon-holder">
            <FontAwesomeIcon icon={faGithub} className="icon gh" />
          </Link>
          <Link to="test" className="icon-holder">
            <FontAwesomeIcon icon={faYoutube} className="icon yt" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
