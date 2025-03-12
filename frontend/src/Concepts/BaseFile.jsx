import React from "react";

const BaseFile = () => {
  return (
    <div style={{ padding: "20px", fontFamily: "Calibri, sans-serif" }}>
      <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>Base File</h1>

      <h4>File Names:</h4>
      <p style={{ marginBottom: "10px" }}>
        Base file names start with "<strong>X_</strong>".
      </p>

      <p style={{ marginBottom: "10px" }}>For example:</p>

      <p>
        "<strong>X_FLOOR PLAN.R0</strong>" will have base floor plans.R0, R1 are
        revision numbers. If changing revision numbers, we need to reassign xref
        files to sheets. Always use CAPITAL letters for file names.
      </p>
    </div>
  );
};

export default BaseFile;
