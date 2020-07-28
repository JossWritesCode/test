import React from "react";
import XIcon from "../assets/icons/icon-x.svg";

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
        <div className="sub-information">
          <p className="sub-menu-item-employee">
            {subItemInfo.employee ? <>{subItemInfo.employee.name} | </> : null}
          </p>
          <p className="sub-menu-item-source">
            {subItemInfo.source ? <>{subItemInfo.source} | </> : null}
          </p>
          <p className="sub-menu-item-date">
            {subItemInfo.date ? subItemInfo.date : null}
          </p>
        </div>
      </div>
      <img src={XIcon} alt="close" />
    </div>
  );
}

export default SideMenuSubItem;
