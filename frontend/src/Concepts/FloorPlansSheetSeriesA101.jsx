import React from "react";

const FloorPlansSeriesA101 = () => {
  return (
    <div style={{ padding: "20px", fontFamily: "Calibri, sans-serif" }}>
      <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>
        FLOOR PLANS (Sheet series A1.01...)
      </h1>
      <ul style={{ textAlign: "left" }}>
        <li>Floor-wise sheet numbers</li>
        <li>Composition based on the number of different plans</li>
      </ul>
      <br />
      <p>Compose floor plan type-wise sheet numbers.</p>
      <br />
      <p>Following things to check on this drawing:</p>
      <ul>
        <li>Wall tags</li>
        <li>
          Building outside dimensions (The outermost dimension string should
          have "OUT TO OUT" in brackets. The same dimensions should not be
          repeated on the other side of the building.)
        </li>
        <li>Grid dimensions</li>
        <li>
          Interior elevation tags (In the A-Notes layer, adjust as per
          availability in the plan.)
        </li>
        <li>Equipment</li>
        <li>Millwork</li>
        <li>
          Grid lines (Vertical: right to left numbers. Horizontal: top to bottom
          numbers.)
        </li>
        <li>Section marks</li>
        <li>
          Area - For each use of the building. This should not be visible in
          other types of floor plans. (Includes exterior walls and half of
          interior walls if a common wall exists between two premises.)
        </li>
        <li>Fire rating - Wall markings</li>
      </ul>
    </div>
  );
};

export default FloorPlansSeriesA101;
