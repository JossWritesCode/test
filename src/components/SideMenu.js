import React from "react";
import sideMenuData from "../assets/accordion.json";
import SideMenuSection from "./SideMenuSection.js";
import EmployeesIcon from "../assets/icons/icon-employees.svg";
import MessagesIcon from "../assets/icons/icon-messages.svg";
import NotificationsIcon from "../assets/icons/icon-notifications.svg";
import ToDoListIcon from "../assets/icons/icon-todolist.svg";

function SideMenu() {
  //array of the menu data that the menu sections will need
  const arrayOfMenuData = [];

  //array of menu property names (needed for later deleting items from json file)
  const arrayOfMenuProperties = [];

  //array of titles
  const arrayOfMenuNames = [
    "Employees",
    "Messages",
    "Notifications",
    "To do list",
  ];

  // array of links to the icons
  const arrayOfLogoLinks = [
    EmployeesIcon,
    MessagesIcon,
    NotificationsIcon,
    ToDoListIcon,
  ];

  // pushing the data into the arrays
  for (let property in sideMenuData) {
    arrayOfMenuData.push(sideMenuData[property]);
    arrayOfMenuProperties.push(property);
  }

  return (
    <div className="side-menu">
      {arrayOfMenuNames.map((section, index) => (
        <SideMenuSection
          sectionData={arrayOfMenuData[index]}
          sectionName={section}
          logoLink={arrayOfLogoLinks[index]}
          menuProperty={arrayOfMenuProperties[index]}
          sideMenuData={sideMenuData}
          key={index}
        />
      ))}
    </div>
  );
}

export default SideMenu;
