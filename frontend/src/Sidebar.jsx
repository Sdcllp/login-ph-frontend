import React, { useState } from "react";
import { FaChevronRight, FaChevronDown, FaBars } from "react-icons/fa"; 

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
          whiteSpace: "nowrap",
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

        {/* Example Section */}
        <div>
          <div
            onClick={() => toggleSection("project-type-1")}
            style={{
              display: "flex",
              alignItems: "center",
              padding: "12px",
              cursor: "pointer",
              backgroundColor: "",
              transition: "background 0.3s",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#55677d")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "")}
          >
            {openSections["project-type-1"] ? (
              <FaChevronDown style={{ marginRight: "10px" }} />
            ) : (
              <FaChevronRight style={{ marginRight: "10px" }} />
            )}
            Project Type 1
          </div>

          {openSections["project-type-1"] && (
            <div style={{ backgroundColor: "#273649", paddingLeft: "20px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "10px 20px",
                  cursor: "pointer",
                }}
                onClick={() => handleItemClick("base-file")}
              >
                Base File
              </div>
            </div>
          )}
        </div>
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
        <h2>Selected Content Will Appear Here</h2>
        <p>
          This section will display the detailed description of the selected
          item from the sidebar.
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
