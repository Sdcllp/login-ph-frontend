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
        { name: "General Drafting Guidelines", path: "general-drafting" },
        { name: "General BIM Guidelines", path: "general-bim" },
      ],
    },
    {
      title: "Project Type 1",
      key: "project-type-1",
      path: "project-type-1",
      items: [
        { name: "Base file", path: "base-file" },
        { name: "Architecture Sheets", path: "architecture-sheets" },
        { name: "Elevations", path: "elevations" },
        { name: "Sections", path: "sections" },
        { name: "Interior Elevations", path: "interior-elevations" },
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
    <div
      style={{
        width: "250px",
        backgroundColor: "#1e293b",
        color: "white",
        height: "100vh",
        overflowY: "auto",
        position: "fixed",
        left: 0,
        top: 0,
        bottom: 0,
        zIndex: 1000,
        transition: "0.3s",
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
            padding: "12px",
            cursor: "pointer",
            transition: "background 0.3s",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#55677d")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "")}
        >
          {section.name}
        </div>
      ))}

      {collapsibleSections.map((section) => (
        <div key={section.key}>
          <div
            onClick={() => toggleSection(section.key, section.path)}
            style={{
              display: "flex",
              alignItems: "center",
              padding: "12px",
              cursor: "pointer",
              transition: "background 0.3s",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#55677d")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "")}
          >
            {openSections[section.key] ? (
              <FaChevronDown style={{ marginRight: "10px" }} />
            ) : (
              <FaChevronRight style={{ marginRight: "10px" }} />
            )}
            {section.title}
          </div>

          {openSections[section.key] && section.items && (
            <div style={{ backgroundColor: "#273649", paddingLeft: "20px" }}>
              {section.items.map((item) => (
                <div key={item.path}>
                  <div
                    onClick={() => handleItemClick(item.path)}
                    style={{
                      padding: "10px 20px",
                      cursor: "pointer",
                    }}
                  >
                    {item.name}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
