import React, { useState } from "react";
import { FaChevronRight, FaChevronDown } from "react-icons/fa";

const Sidebar = ({ setActiveContent }) => {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (section, path) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
    if (path) setActiveContent(path);
  };

  const handleItemClick = (path) => {
    setActiveContent(path);
  };

  const sections = [{ name: "PH Studio", path: "phstudio" }];

  const collapsibleSections = [
    {
      title: "Overview",
      key: "overview",
      path: "overview",
      items: [
        { name: "General Technical Guidelines", path: "general-technical" },
        {
          name: "General Drafting Guidelines",
          path: "general-drafting",
          subItems: [
            { name: "Folder Structure", path: "folder-structure" },
            { name: "File Naming", path: "file-naming" },
          ],
        },
        { name: "General BIM Guidelines", path: "general-bim" },
      ],
    },
    {
      title: "Project Type 1",
      key: "project-type-1",
      path: "project-type-1",
      items: [
        { name: "Base file", path: "base-file" },
        {
          name: "Architecture Sheets",
          path: "architecture-sheets",
          subItems: [
            {
              name: "Floor Plans (Series A1.01)",
              path: "floor-plans-series-a101",
              subItems: [
                { name: "Floor Plans", path: "floor-plans" },
                { name: "RCP", path: "rcp" },
                { name: "Equipment Plan", path: "equipment-plan" },
              ],
            },
          ],
        },
        { name: "Elevations", path: "elevations" },
        { name: "Sections", path: "sections" },
        {
          name: "Interior Elevations",
          path: "interior-elevations",
          subItems: [{ name: "Enlarge restrooms", path: "enlarge-restrooms" }],
        },
      ],
    },
    {
      title: "Site Plan (series A0.01...)",
      key: "site-plans-series-a101",
      path: "site-plans-series-a101",
      items: [
        { name: "Site Plans", path: "site-plans" },
        { name: "Site Details", path: "site-details" },
        { name: "Fire Lane Plan", path: "fire-lane-plan" },
      ],
    },
    {
      title: "Fuel Drawing",
      key: "fuel-drawing",
      path: "fuel-drawing",
      items: [{ name: "Piping Drawing", path: "piping-drawing" }],
    },
  ];

  return (
    <div style={{ display: "flex", height: "100vh", overflow: "hidden" }}>
      {/* Sidebar */}
      <div
        style={{
          width: "280px",
          minWidth: "280px",
          backgroundColor: "#1e293b",
          color: "white",
          height: "100vh",
          overflowY: "auto",
        }}
      >
        <h2
          style={{
            padding: "15px",
            textAlign: "center",
            backgroundColor: "#334155",
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >
          CONTENTS
        </h2>

        <div onClick={() => handleItemClick("phstudio")} style={{ padding: "12px", cursor: "pointer" }}>
          PH Studio
        </div>
      </div>

      {/* Right Side Content */}
      <div
        style={{
          flex: 1,
          padding: "20px",
          backgroundColor: "#f8f9fa",
          overflowY: "auto",
        }}
      >
        <div
          style={{
            backgroundColor: "#a8bac3",
            padding: "10px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h3 style={{ margin: 0 }}>Your Page Title</h3>
          <button
            style={{
              backgroundColor: "red",
              color: "white",
              border: "none",
              padding: "10px",
              cursor: "pointer",
              borderRadius: "5px",
            }}
          >
            Logout
          </button>
        </div>

        {/* Your Main Content */}
        <div style={{ marginTop: "20px", textAlign: "justify", padding: "20px", backgroundColor: "white" }}>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
