import React from "react";

const Navbar = ({ onLogout }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "12px 20px",
        backgroundColor: "#9fb6c3",
        color: "white",
        width: "100%", // Full width
        position: "fixed", // Fixed on top
        top: 0,
        left: 0,
        zIndex: 1000,
        boxSizing: "border-box",
      }}
    >
      {/* Logo / Title */}
      <h2
        style={{
          fontSize: "18px",
          fontWeight: "bold",
          margin: 0,
          whiteSpace: "nowrap", // Prevents breaking
        }}
      >
        SDC STUDIO LLC
      </h2>

      {/* Logout Button */}
      <button
        onClick={onLogout}
        style={{
          backgroundColor: "#ff4d4d",
          color: "white",
          border: "none",
          padding: "8px 12px",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Logout
      </button>

      {/* Responsive CSS */}
      <style>
        {`
          @media (max-width: 768px) {
            div {
              padding: 10px 15px;
            }
            h2 {
              font-size: 16px; /* Reduce title size */
            }
            button {
              font-size: 12px;
              padding: 6px 10px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Navbar;
