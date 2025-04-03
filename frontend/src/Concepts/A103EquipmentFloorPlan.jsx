import React from 'react';

const A103EquipmentFloorPlan = () => {
  return (
    <div style={{ padding: "20px", fontFamily: "Calibri, sans-serif" }}>
      <h1 style={{ fontSize: "24px", fontWeight: "bold", color: "#000" }}>
        A1.03 Equipment Floor Plan
      </h1>

      <p style={{ fontSize: "16px", marginBottom: "10px" }}>
        Xref. <strong>_X Floor Plan. R0.dwg</strong>
      </p>
      <p>Give layer state <strong>06. Equipment Plan</strong></p>

      <h2 style={{ color: "#000", fontSize: "18px", marginTop: "20px" }}>Technical elements</h2>
      <ul>
        <li>All equipment</li>
        <li>Sanitary sewer slab</li>
      </ul>

      <h2 style={{ color: "#000", fontSize: "18px", marginTop: "20px" }}>Drawing elements</h2>

      <h2 style={{ color: "#000", fontSize: "18px", marginTop: "20px" }}>Dimensions</h2>

      <h2 style={{ color: "#000", fontSize: "18px", marginTop: "20px" }}>Tags and keynotes</h2>
      <ul>
        <li>All interior elevation tags</li>
        <li>All equipment tags</li>
      </ul>

      <h2 style={{ color: "#000", fontSize: "18px", marginTop: "20px" }}>Room name, number & areas</h2>
      <ul>
        <li>Room name</li>
      </ul>

      <h2 style={{ color: "#000", fontSize: "18px", marginTop: "20px" }}>Lines, general notes and legends</h2>
      <ul>
        <li>
          Equipment schedule with tag no., description, qty, manufacturer, model no., and notes
        </li>
        <li>General notes</li>
      </ul>

      <h2 style={{ color: "#000", fontSize: "18px", marginTop: "20px" }}>Title block details</h2>
      <p>Drawing number, drawing title, project no., scale, project name, project address</p>
    </div>
  );
};

export default A103EquipmentFloorPlan;
