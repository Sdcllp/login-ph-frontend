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
        {
          name: "Base File",
          path: "base-file",
          subItems: [
            { name: "X_Floor Plan", path: "x-floor-plan" },
            { name: "X_Site Plan", path: "x-site-plan" },
            { name: "X_Survey", path: "x-survey" },
          ],
        },
        { name: "Elevations", path: "elevations" },
        { name: "Sections", path: "sections" },
        {
          name: "Interior Elevations",
          path: "interior-elevations",
          subItems: [{ name: "Enlarge Restrooms", path: "enlarge-restrooms" }],
        },
      ],
    },
    {
      title: "Architecture Sheets",
      key: "architecture-sheets",
      path: "architecture-sheets",
      items: [
        {
          name: "Site Plan (Series A0.01...)",
          path: "site-plans-series-a101",
          subItems: [
            { name: "Site Plans", path: "site-plans" },
            { name: "Site Details", path: "site-details" },
            { name: "Fire Lane Plan", path: "fire-lane-plan" },
          ],
        },
        {
          name: "Code Sheet (Series G0.01...)",
          path: "code-sheet-series-g001",
          subItems: [
            { name: "G0.01 Gen Sheet Index", path: "g001-gen-sheet-index" },
            { name: "G0.02 Gen Notes Sheet", path: "g002-gen-notes-sheet" },
          ],
        },
        {
          name: "Floor Plans (Sheet Series A1.01)",
          path: "floor-plans-sheet-series-a101",
          subItems: [
            { name: "X_Floor Plans", path: "x-floor-plans" },
            { name: "RCP", path: "rcp" },
            { name: "Equipment Plan", path: "equipment-plan" },
          ],
        },
        { name: "ElevationsSeriesA201", path: "elevations-series-a201" },
        { name: "Sections", path: "sections" },
        {
          name: "Interior Elevations",
          path: "interior-elevations",
          subItems: [{ name: "Enlarge Restrooms", path: "enlarge-restrooms" }],
        },
      ],
    },
    {
      title: "Fuel Drawing",
      key: "fuel-drawing",
      path: "fuel-drawing",

      items: [
        { name: "Piping Drawing", path: "piping-drawing" },
        { name: "Com Check", path: "com-check" },
      ],
    },
  ];

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Sidebar Toggle Button (Visible only on small screens) */}

      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        style={{
          position: "absolute",
          top: 10,
          left: 10,
          background: "transparent",
          border: "none",
          fontSize: "24px",
          cursor: "pointer",
          zIndex: 1000,

          display: isSidebarOpen ? "none" : "block", // Show only when sidebar is closed
        }}
      >
        <FaBars color="white" />
      </button>

      {/* Sidebar */}
      <div
        style={{
          width: isSidebarOpen ? "280px" : "0",
          backgroundColor: "#1e293b",
          color: "white",

          height: "100vh",
          overflowY: "auto",

          minHeight: "100vh", // ✅ Full height fix
          height: "100%", // ✅ Ensures auto-expansion if content grows
          overflowY: "auto", // ✅ Enables scrolling for long content
          transition: "width 0.3s",
          paddingTop: isSidebarOpen ? "10px" : "0",
          whiteSpace: "nowrap",
        }}
      >
        {/* Close Button */}

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

        {collapsibleSections.map((section) => (
          <div key={section.key}>
            <div
              onClick={() => toggleSection(section.key, section.path)}
              style={{
                display: "flex",
                alignItems: "center",
                padding: "12px",
                cursor: "pointer",
              }}
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
                      onClick={() => {
                        if (item.subItems) {
                          toggleSection(item.path, item.path);
                        } else {
                          handleItemClick(item.path);
                        }
                      }}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        padding: "10px 20px",
                        cursor: "pointer",
                      }}
                    >
                      {openSections[item.path] ? (
                        <FaChevronDown style={{ marginRight: "10px" }} />
                      ) : (
                        <FaChevronRight style={{ marginRight: "10px" }} />
                      )}
                      {item.name}
                    </div>
                    {item.subItems && openSections[item.path] && (
                      <div style={{ paddingLeft: "20px" }}>
                        {item.subItems.map((subItem) => (
                          <div
                            key={subItem.path}
                            onClick={() => handleItemClick(subItem.path)}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              padding: "8px 20px",
                              cursor: "pointer",
                            }}
                          >
                            {subItem.name}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Right Side Content */}
      <div
        style={{
          flex: "1", // ✅ Ensures this section takes remaining space
          padding: "20px",
          overflowY: "auto",
          backgroundColor: "#f8f9fa",
        }}
      ></div>
    </div>
  );
};

export default Sidebar;
