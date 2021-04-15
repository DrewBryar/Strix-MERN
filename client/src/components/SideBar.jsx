import React from "react";

const SideBar = (props) => {
  return (
    <div className="container-fluid position-fixed bg-light">
      <div className="row">
        <div className="col">Hi, I'm the Sidebar</div>
      </div>
      <div className="row">
        <div className="col">${props.collectedTotalPrice.toFixed(2)}</div>
      </div>
    </div>
  );
};

export default SideBar;
