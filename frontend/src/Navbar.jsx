import React from "react";

const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#a0b8c8", // Navbar Background
        padding: "10px 20px",
        position: "fixed",
        width: "100%", // Ensure full width
        top: 0,
        left: 0,
        zIndex: 1000,
        boxSizing: "border-box",
      }}
    >
      {/* Left Side - Branding */}
      <h2 style={{ margin: 0, fontSize: "20px", color: "#fff", whiteSpace: "nowrap" }}>STUDIO LLC</h2>

      {/* Right Side - Logout Button */}
      <button
        style={{
          backgroundColor: "red",
          color: "white",
          border: "none",
          padding: "8px 15px",
          cursor: "pointer",
          borderRadius: "5px",
          fontSize: "14px",
        }}
      >
        Logout
      </button>

      {/* Mobile Responsive CSS */}
      <style>
        {`
          @media (max-width: 768px) {
            div {
              padding: 8px 15px; /* Navbar padding adjust */
            }
            h2 {
              font-size: 16px; /* Reduce heading size */
            }
            button {
              font-size: 12px;
              padding: 5px 10px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Navbar;
