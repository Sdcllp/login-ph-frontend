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
        flexWrap: "wrap", // Small screens pe wrap karega
      }}
    >
      {/* Logo / Title */}
      <h2
        style={{
          fontSize: "16px", // Mobile-friendly font size
          fontWeight: "bold",
          margin: 0,
          flex: "1", // Space fill karega
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
          fontSize: "14px",
        }}
      >
        Logout
      </button>

      {/* Media Query for Small Screens */}
      <style>
        {`
          @media (max-width: 600px) {
            div {
              flex-direction: column;
              align-items: center;
              text-align: center;
              padding: 10px;
            }
            h2 {
              font-size: 14px;
              margin-bottom: 5px;
            }
            button {
              width: 100%;
              max-width: 120px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Navbar;
