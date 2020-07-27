import React from "react";
import sideMenuData from "../assets/accordion.json";
import SideMenuSection from "./SideMenuSection.js";
import EmployeesIcon from "../assets/icons/icon-employees.svg";
import MessagesIcon from "../assets/icons/icon-messages.svg";
import NotificationsIcon from "../assets/icons/icon-notifications.svg";
import ToDoListIcon from "../assets/icons/icon-todolist.svg";

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
  const arrayOfLogoLinks = [
    EmployeesIcon,
    MessagesIcon,
    NotificationsIcon,
    ToDoListIcon,
  ];
  return (
    <div className="side-menu">
      {arrayOfMenuNames.map((section, index) => (
        <SideMenuSection
          sectionData={arrayOfMenuData[index]}
          sectionName={section}
          logoLink={arrayOfLogoLinks[index]}
        />
      ))}
    </div>
  );
}

export default SideMenu;
