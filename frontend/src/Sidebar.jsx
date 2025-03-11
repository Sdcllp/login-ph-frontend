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
          transition: "width 0.3s",
          paddingTop: isSidebarOpen ? "10px" : "0",
          whiteSpace: "nowrap",
        }}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsSidebarOpen(false)}
          style={{
            display: isSidebarOpen ? "block" : "none",
            background: "transparent",
            border: "none",
            color: "white",
            fontSize: "24px",
            position: "absolute",
            top: 10,
            right: 10,
            cursor: "pointer",
          }}
        >
          ✖
        </button>

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
          flex: "1",
          padding: "20px",
          overflowY: "auto",
          backgroundColor: "#f8f9fa",
        }}
      >
        
      </div>
    </div>
  );
};

export default Sidebar;
