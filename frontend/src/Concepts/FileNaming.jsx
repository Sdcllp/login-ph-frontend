import React from "react";

const FileNaming = () => {
  return (
    <div style={{ padding: "20px", fontFamily: "Calibri, sans-serif" }}>
      <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>File Naming</h1>
      <strong> Title Block File Name: </strong> TB <br></br>
      <strong> Xref File Names (Base File):</strong> Starting with{" "}
      <strong>_X</strong>, i.e._X FLOOR PLAN, _X SITE PLAN, _X SURVEY
      <p>
        <strong>Drawing number series:</strong>
        <br></br>
        Cover sheet does not have any sheet number.
      </p>
      <ul>
        <li>A0.01, A0.02,... Series for site-related plans</li>
        <li>A1.01, A1.02,... Series for floor plan-related plans</li>
        <li>A2.01, A2.02,... Series for exterior elevation-related drawings</li>
        <li>
          A3.01, A3.02,... Series for all kinds of sections (building sections,
          wall sections, etc.)
        </li>
        <li>
          A4.01, A4.02,... Series for all kinds of interior elevations
          (restrooms, other rooms, internal areas, etc.)
        </li>
        <li>
          A6.01, A6.02,... Series for all kinds of schedules (door-window
          schedule, floor finish, etc.)
        </li>
        <li>
          AS_01, TAS_02... Series for ADA-related drawings (these notes
          generally stay standard)
        </li>
      </ul>
      <p>
        <strong>Sheet Numbering:</strong> After all sheets are done, sheet
        numbering starts from the cover sheet. Example:{" "}
        <strong>01. Cover Sheet, A0.01 Site Plan</strong>
      </p>
    </div>
  );
};

export default FileNaming;
