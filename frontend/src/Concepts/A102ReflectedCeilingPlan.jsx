import React from 'react';

const A102ReflectedCeilingPlan = () => {
  return (
    <div style={{ padding: "20px", fontFamily: "Calibri, sans-serif" }}>
      <h1 style={{ fontSize: "24px", fontWeight: "bold", color: "#000" }}>
        A1.02 Reflected Ceiling Plan & Details
      </h1>

      <p style={{ fontSize: "16px", marginBottom: "10px" }}>
        Xref. <strong>_X Floor Plan. R0.dwg</strong>
      </p>
      <p>Give layer state <strong>05. RCP</strong></p>

      <h2 style={{ color: "#000", fontSize: "18px", marginTop: "20px" }}>Technical elements</h2>
      <ul>
        <li>Roof access roof hatch (if in floor plan)</li>
        <li>Air diffuser (supply air and return air diffuser)</li>
        <li>Typical ceiling details (at cashier and wall above cooler)</li>
        <li>Ceiling lights like spot light, 2x4 light, 2x2 light, wall lights, etc.</li>
      </ul>

      <h2 style={{ color: "#000", fontSize: "18px", marginTop: "20px" }}>Drawing elements</h2>

      <h2 style={{ color: "#000", fontSize: "18px", marginTop: "20px" }}>Dimensions</h2>
      <ul>
        <li>Dimension between two lights</li>
      </ul>

      <h2 style={{ color: "#000", fontSize: "18px", marginTop: "20px" }}>Tags and keynotes</h2>

      <h2 style={{ color: "#000", fontSize: "18px", marginTop: "20px" }}>Room name, number & areas</h2>
      <ul>
        <li>Room name</li>
        <li>Ceiling hatch</li>
        <li>Ceiling heights</li>
      </ul>

      <h2 style={{ color: "#000", fontSize: "18px", marginTop: "20px" }}>Lines, general notes and legends</h2>
      <ul>
        <li>North arrow in sheet near to view name</li>
        <li>General notes</li>
        <li>Lighting legend</li>
        <li>Symbol legend</li>
      </ul>

      <h2 style={{ color: "#000", fontSize: "18px", marginTop: "20px" }}>Title block details</h2>
      <li>Drawing number, drawing title, project no., scale, project name, project address</li>
    </div>
  );
};

export default A102ReflectedCeilingPlan;
