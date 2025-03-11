import React, { useState } from "react";
import { FaChevronRight, FaChevronDown, FaBars } from "react-icons/fa"; // Import icons

const Sidebar = ({ setActiveContent }) => {
  const [openSections, setOpenSections] = useState({});
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Sidebar toggle state

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
    <div style={{ display: "flex" }}>
      {/* Sidebar Toggle Button */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        style={{
          position: "fixed",
          top: 10,
          left: 10,
          background: "transparent",
          border: "none",
          fontSize: "24px",
          cursor: "pointer",
          zIndex: 1000,
          color: "white",
          display: isSidebarOpen ? "none" : "block", // Show only when sidebar is closed
        }}
      >
        <FaBars />
      </button>

      {/* Sidebar */}
      <div
        style={{
          width: isSidebarOpen ? "280px" : "0",
          backgroundColor: "#1e293b",
          color: "white",
          height: "100vh",
          overflowY: "auto",
          transition: "width 0.3s",
          paddingTop: isSidebarOpen ? "10px" : "0",
          position: "fixed",
          left: 0,
          top: "50px", // Adjusted to match navbar height
          boxSizing: "border-box",
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

        {sections.map((section) => (
          <div
            key={section.path}
            onClick={() => handleItemClick(section.path)}
            style={{
              display: "flex",
              alignItems: "center",
              padding: "12px",
              cursor: "pointer",
            }}
          >
            {section.name}
          </div>
        ))}
      </div>

      {/* Right Side Content (Fixed Overlap) */}
      <div
        style={{
          flex: "1",
          marginLeft: isSidebarOpen ? "280px" : "0",
          padding: "20px",
          overflowY: "auto",
          backgroundColor: "#f8f9fa",
          transition: "margin-left 0.3s",
          marginTop: "50px", // FIXED: Push content below navbar
        }}
      ></div>
    </div>
  );
};

export default Sidebar;
