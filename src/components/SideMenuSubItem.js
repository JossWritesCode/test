import React from "react";
import XIcon from "../assets/icons/icon-x.svg";
// content, date, employee, source, name

function SideMenuSubItem({ subItemInfo }) {
  return (
    <div className="sub-menu-item">
      <div className="sub-menu-item-list">
        <p className="sub-menu-item-name">
          {subItemInfo.name ? subItemInfo.name : null}
        </p>
        <p className="sub-menu-item-content">
          {subItemInfo.content ? subItemInfo.content : null}
        </p>
        <p className="sub-menu-item-employee">
          {subItemInfo.employee ? subItemInfo.employee : null}
        </p>
        <p className="sub-menu-item-source">
          {subItemInfo.source ? subItemInfo.source : null}
        </p>
        <p className="sub-menu-item-date">
          {subItemInfo.date ? subItemInfo.date : null}
        </p>
      </div>
      <img src={XIcon} alt="close" />
    </div>
  );
}

export default SideMenuSubItem;
