import React from "react";

const XFloorPlan = () => {
  return (
    <div style={{ padding: "20px", fontFamily: "Calibri, sans-serif" }}>
      <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>X_FLOOR PLAN </h1>
      <h4>Workflow:</h4>
      <ul>
        <li>Take drawings from schematic</li>
        <li>Check each layer isolated and what objects are on that layer.</li>
        <li>
          Decide wall types and wall layers of each type of walls. Draw all
          walls with line type and hatches.
        </li>
        <li>
          Draw or put all doors and windows as per room requirement, cross check
          with elevation, check the
        </li>
        <li>
          Decide Grid lines first with possible column locations, put basic
          columns, cut wall hatches and adjust wall layers around column.
        </li>
        <li>
          Draw millwork and see how it fits in space. put all of them on
          respective millwork layer. 
        </li>
        <li>
          Draw all equipment such as mechanical, sanitary, electrical, etc. All
          of them need to be as per functional requirement. Check layers.
          Drawings inside block should be in 0 layer. And block need to be in
          specific equipment layer.
        </li>
        <li>Draw ADA area requirements, check all doors in and out area.</li>
      </ul>
    </div>
  );
};
export default XFloorPlan;
