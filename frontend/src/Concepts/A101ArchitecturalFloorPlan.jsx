import React from 'react';

const A101ArchitecturalFloorPlan = () => {
  return (
    <div style={{ padding: "20px", fontFamily: "Calibri, sans-serif" }}>
      <h1 style={{ fontSize: "24px", fontWeight: "bold", color: "#000" }}>
        01.01 Architectural Floor Plan
      </h1>

      <p style={{ fontSize: "16px", marginBottom: "10px" }}>
        Xref. <strong>_X Floor Plan. R0.dwg</strong>
      </p>
      <p>Give layer state <strong>04. Floor Plan</strong></p>

      <h2 style={{ color: "#000", fontSize: "18px", marginTop: "20px" }}>Technical elements</h2>
      <ul>
        <li>All wall layers like 5/8" gypsum board + 5 1/2" wood stud + 5/8" gypsum board</li>
        <li>Insulation in wall and first confirm wall type (refer wall types A6.03 part plan)</li>
        <li>Plumbing equipment</li>
        <li>Roof access like roof hatch or ladder</li>
        <li>Sanitary sewer slab and its dimensions</li>
        <li>All grid lines (always start grid no. top left corner)</li>
      </ul>

      <h2 style={{ color: "#000", fontSize: "18px", marginTop: "20px" }}>Drawing elements</h2>

      <h2 style={{ color: "#000", fontSize: "18px", marginTop: "20px" }}>Dimensions</h2>
      <ul>
        <li>Building out to out dimension (top side of building & left side of building)</li>
        <li>Grid to grid dimension
         
        <li>Give string-based dimensions</li>
          
        </li>
        <li>Start giving dimensions (one string in horizontal line, one string in vertical line)</li>
        <li>Door to door or window to door and required dimensions</li>
      </ul>

      <h2 style={{ color: "#000", fontSize: "18px", marginTop: "20px" }}>Tags and keynotes</h2>
      <ul>
        <li>Wall tags as per wall type</li>
        <li>Door and windows tags</li>
        <li>All exterior elevation tags</li>
        <li>All interior elevation tags</li>
      </ul>

      <h2 style={{ color: "#000", fontSize: "18px", marginTop: "20px" }}>Room name, number & areas</h2>
      <ul>
        <li>Room name</li>
        <li>Building area</li>
      </ul>

      <h2 style={{ color: "#000", fontSize: "18px", marginTop: "20px" }}>Lines, general notes and legends</h2>
      <ul>
        <li>All building & wall section line</li>
        <li>North arrow in sheet near to view name</li>
        <li>Floor plan legends (like concrete wall details or fire rate wall details)</li>
        <li>North arrow in sheet near to view name</li>
        <li>General notes</li>
      </ul>

      <h2 style={{ color: "#000", fontSize: "18px", marginTop: "20px" }}>Title block details</h2>
      <li>Drawing number, drawing title, project no., scale, project name, project address</li>
    </div>
  );
};

export default A101ArchitecturalFloorPlan;
