import React from "react";
import sideMenuData from "../assets/accordion.json";
import Section from "./SideMenuSection.js";
function SideMenuSection({ sectionData, sectionName }) {
  return (
    <section className="section">
      <p>{sectionName}</p>
    </section>
  );
}

export default SideMenuSection;
