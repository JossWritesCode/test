import React from "react";
import sideMenuData from "../assets/accordion.json";
import SideMenuSection from "./SideMenuSection.js";
function SideMenu() {
  const arrayOfMenuData = [];
  const arrayOfMenuNames = [
    "Employees",
    "Messages",
    "Notifications",
    "To do list",
  ];
  for (let property in sideMenuData) {
    arrayOfMenuData.push(sideMenuData[property]);
  }
  return (
    <div className="side-menu">
      {arrayOfMenuNames.map((section, index) => (
        <SideMenuSection
          sectionData={arrayOfMenuData[index]}
          sectionName={section}
        />
      ))}
    </div>
  );
}

export default SideMenu;
