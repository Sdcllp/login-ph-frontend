import React, { useState } from "react";
import { FaChevronRight, FaChevronDown, FaBars } from "react-icons/fa"; 

const Sidebar = ({ setActiveContent }) => {
  const [openSections, setOpenSections] = useState({});
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleItemClick = (path) => {
    setActiveContent(path);
  };

  const sections = [{ name: "PH Studio", path: "phstudio" }];

  const collapsibleSections = [
    {
      title: "Overview",
      key: "overview",
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
  ];

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Sidebar Toggle Button */}
      {!isSidebarOpen && (
        <button
          onClick={() => setIsSidebarOpen(true)}
          style={{
            position: "absolute",
            top: 10,
            left: 10,
            background: "transparent",
            border: "none",
            fontSize: "24px",
            cursor: "pointer",
            zIndex: 1001,
          }}
        >
          <FaBars color="white" />
        </button>
      )}

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
        {isSidebarOpen && (
          <button
            onClick={() => setIsSidebarOpen(false)}
            style={{
              background: "transparent",
              border: "none",
              color: "white",
              fontSize: "24px",
              position: "absolute",
              top: 10,
              right: 10,
              cursor: "pointer",
              zIndex: 1001,
            }}
          >
            ✖
          </button>
        )}

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
              onClick={() => toggleSection(section.key)}
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
                      onClick={() =>
                        item.subItems ? toggleSection(item.path) : handleItemClick(item.path)
                      }
                      style={{
                        display: "flex",
                        alignItems: "center",
                        padding: "10px 20px",
                        cursor: "pointer",
                      }}
                    >
                      {item.subItems && (openSections[item.path] ? <FaChevronDown /> : <FaChevronRight />)}
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
    </div>
  );
};

export default Sidebar;
