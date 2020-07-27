import React from "react";
import sideMenuData from "../assets/accordion.json";
import Section from "./SideMenuSection.js";

function SideMenuSection({ sectionData, sectionName, logoLink }) {
  return (
    <section className="section">
      <img alt={sectionName} src={logoLink} />
      <h2 className="title">{sectionName}</h2>
    </section>
  );
}

export default SideMenuSection;
