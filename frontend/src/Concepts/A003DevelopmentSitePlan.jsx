import React from 'react';

const A003DevelopmentSitePlan = () => {
  return (
    <div style={{ padding: "20px", fontFamily: "Calibri, sans-serif" }}>
      <h1 style={{ fontSize: "24px", fontWeight: "bold", color: "#000" }}>
        A0.03 Development Site Plan
      </h1>

      <p style={{ fontSize: "16px", marginBottom: "10px" }}>
        Xref. <strong>_X Site Plan. R0.dwg</strong>
      </p>
      <p>Give layer state <strong>02. Landscape Plan</strong></p>

      <h2 style={{ color: "#000", fontSize: "18px", marginTop: "20px" }}>Technical elements</h2>
      <ul>
        <li>Show all trees and shrubs</li>
        <li>Calculate tree calculations based on city bylaws</li>
        <li>Add typical details of tree planting</li>
        <li>Add typical details of shrub planting</li>
        <li>Add typical details of tree protection barrier</li>
      </ul>

      <h2 style={{ color: "#000", fontSize: "18px", marginTop: "20px" }}>Drawing elements</h2>

      <h2 style={{ color: "#000", fontSize: "18px", marginTop: "20px" }}>Dimensions</h2>
      <ul>
        <li>Not show any dimension in this plan</li>
      </ul>

      <h2 style={{ color: "#000", fontSize: "18px", marginTop: "20px" }}>Tags and keynotes</h2>
      <ul>
        <li>Give all trees tag with tree no.</li>
      </ul>

      <h2 style={{ color: "#000", fontSize: "18px", marginTop: "20px" }}>Areas</h2>
      <ul>
        <li>Only show all retails areas</li>
      </ul>

      <h2 style={{ color: "#000", fontSize: "18px", marginTop: "20px" }}>Lines & general notes and legends</h2>
      <ul>
        <li>Tree legend</li>
        <li>Tree count table</li>
        <li>General notes</li>
      </ul>

      <h2 style={{ color: "#000", fontSize: "18px", marginTop: "20px" }}>Title block details</h2>
      <li>Drawing number, drawing title, project no., scale, project name, project address</li>
    </div>
  );
};

export default A003DevelopmentSitePlan;
