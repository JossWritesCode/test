import React, { useState } from "react";

import SideMenuSubItem from "./SideMenuSubItem";

function SideMenuSection({ sectionData, sectionName, logoLink }) {
  const [toggle, setToggle] = useState(false);
  const [numberOfItems, setNumberOfItems] = useState(sectionData.length);
  return (
    <section className="section">
      <div onClick={() => setToggle(!toggle)} className="section-header">
        <img alt={sectionName} src={logoLink} />
        <h2 className="title">{sectionName}</h2>
        <div className="item-number">{numberOfItems}</div>
      </div>
      {toggle ? (
        <div className="accordion-section">
          {sectionData.map((info, index) => (
            <SideMenuSubItem subItemInfo={info} />
          ))}
        </div>
      ) : null}
    </section>
  );
}

export default SideMenuSection;
