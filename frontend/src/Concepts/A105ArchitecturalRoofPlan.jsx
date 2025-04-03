import React from 'react';

const A105ArchitecturalRoofPlan = () => {
  return (
    <div style={{ padding: "20px", fontFamily: "Calibri, sans-serif" }}>
      <h1 style={{ fontSize: "24px", fontWeight: "bold", color: "#000" }}>
        A1.05 Architectural Roof Plan
      </h1>

      <p style={{ fontSize: "16px", marginBottom: "10px" }}>
        Xref. <strong>_X Floor Plan. R0.dwg</strong>
      </p>
      <p>Give layer state <strong>08. Roof Plan</strong></p>

      <h2 style={{ color: "#000", fontSize: "18px", marginTop: "20px" }}>Technical elements</h2>
      <ul>
        <li>Roof system details</li>
        <li>Scupper or downspout</li>
        <li>Roof slope (like 1/2" per foot slope)</li>
        <li>Roof access like roof hatch or ladder (if in floor plan)</li>
        <li>Typical details of scupper & downspout, overflow scupper</li>
        <li>Roof cricket and its keynotes</li>
      </ul>

      <h2 style={{ color: "#000", fontSize: "18px", marginTop: "20px" }}>Drawing elements</h2>

      <h2 style={{ color: "#000", fontSize: "18px", marginTop: "20px" }}>Dimensions</h2>
      <ul>
        <li>Travel distance (our store with building other store also)</li>
      </ul>

      <h2 style={{ color: "#000", fontSize: "18px", marginTop: "20px" }}>Tags and keynotes</h2>
      <ul>
        <li>Roof cricket and its keynotes</li>
      </ul>

      <h2 style={{ color: "#000", fontSize: "18px", marginTop: "20px" }}>Areas</h2>
      <ul>
        <li>
          No. total roof area, scupper and downspout no., overflow scupper no., area each downspout, considered rainfall intensity
        </li>
      </ul>

      <h2 style={{ color: "#000", fontSize: "18px", marginTop: "20px" }}>Lines & general notes and legends</h2>
      <ul>
        <li>Keyed notes</li>
        <li>Surrounding site (like side walkway, parking, landscaping)</li>
        <li>General notes</li>
      </ul>

      <h2 style={{ color: "#000", fontSize: "18px", marginTop: "20px" }}>Title block details</h2>
      <li>Drawing number, drawing title, project no., scale, project name, project address</li>
    </div>
  );
};

export default A105ArchitecturalRoofPlan;
