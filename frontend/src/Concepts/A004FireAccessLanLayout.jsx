import React from 'react';

const A004FireAccessLanLayout = () => {
  return (
    <div style={{ padding: "20px", fontFamily: "Calibri, sans-serif" }}>
      <h1 style={{ fontSize: "24px", fontWeight: "bold", color: "#000" }}>
        A0.04 Fire Access Lane Layout
      </h1>

      <p style={{ fontSize: "16px", marginBottom: "10px" }}>
        Xref. <strong>_X Site Plan. R0.dwg</strong>
      </p>
      <p>Give layer state <strong>03. Fire Lane Plan</strong></p>

      <h2 style={{ color: "#000", fontSize: "18px", marginTop: "20px" }}>Technical elements</h2>
      <ul>
        <li>Need to show fire truck path as per city by laws (fire lane width)</li>
      </ul>

      <h2 style={{ color: "#000", fontSize: "18px", marginTop: "20px" }}>Drawing elements</h2>

      <h2 style={{ color: "#000", fontSize: "18px", marginTop: "20px" }}>Dimensions</h2>
      <ul>
        <li>Give fire lane turning radius dimension, fire lane width <strong>(prop. xx’ fire lane)</strong></li>
      </ul>

      <h2 style={{ color: "#000", fontSize: "18px", marginTop: "20px" }}>Tags and keynotes</h2>
      <ul>
        <li>No need to give tags</li>
      </ul>

      <h2 style={{ color: "#000", fontSize: "18px", marginTop: "20px" }}>Areas</h2>
      <ul>
        <li>Only show all retails areas</li>
      </ul>

      <h2 style={{ color: "#000", fontSize: "18px", marginTop: "20px" }}>Lines & general notes and legends</h2>
      <ul>
        <li>Add fire lane marking notes and its details</li>
      </ul>

      <h2 style={{ color: "#000", fontSize: "18px", marginTop: "20px" }}>Title block details</h2>
      <p>Drawing number, drawing title, project no., scale, project name, project address</p>
    </div>
  );
};

export default A004FireAccessLanLayout;
