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
          top: 0,
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
          marginLeft: isSidebarOpen ? "280px" : "0",
          padding: "20px",
          overflowY: "auto",
          backgroundColor: "#f8f9fa",
          transition: "margin-left 0.3s",
        }}
      ></div>
    </div>
  );
};

export default Sidebar;
