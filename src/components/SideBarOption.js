import React from 'react';
import "../CSS/SidebarOption.css"
import styled from "styled-components"
// Icon is capital because its an external component we a bringin into project
function SideBarOption({ title, Icon }) {
  return (
    <div className="sidebarOption">
      {Icon && <Icon className="sidebarOption_icon"/>}
      {Icon ? <h4>{title}</h4> : <p>{title}</p> }

    </div>
  );
};

export default SideBarOption;
