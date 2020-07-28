import React, { useState } from "react";

import SideMenuSubItem from "./SideMenuSubItem";

function SideMenuSection({
  sectionData,
  sectionName,
  logoLink,
  menuProperty,
  deleteItem,
  sideMenuData,
}) {
  const [toggle, setToggle] = useState(false);
  const [numberOfItems, setNumberOfItems] = useState(sectionData.length);

  function deleteItem(property, index) {
    delete sideMenuData[property][index];
    setNumberOfItems(numberOfItems - 1);
    console.log(property, index);
  }
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
            <SideMenuSubItem
              menuProperty={menuProperty}
              deleteItem={deleteItem}
              subItemInfo={info}
              key={index}
              index={index}
            />
          ))}
        </div>
      ) : null}
    </section>
  );
}

export default SideMenuSection;
