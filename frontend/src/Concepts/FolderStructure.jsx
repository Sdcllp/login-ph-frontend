import React from "react";

const FolderStructure = () => {
  return (
    <div style={{ padding: "20px", fontFamily: "Calibri, sans-serif" }}>
      <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>
        General Drafting Guidelines
      </h1>

      <ul>
        <li> Project Data</li>
        <li>Drawings</li>
        <li>Correspondence</li>
        <li>Permits & Approval</li> {/* ✅ Fixed numbering */}
      </ul>
    </div>
  );
};

export default FolderStructure;
{
  /* ✅ Fixed component name */
}
