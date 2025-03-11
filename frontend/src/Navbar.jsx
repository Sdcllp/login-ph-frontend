import React, { useState } from "react";
import { FaBars } from "react-icons/fa";

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
        width: "100%", // Full width navbar
        position: "fixed", // Fixed at top
        top: 0,
        left: 0,
        zIndex: 1000, // Ensures it stays on top
      }}
    >
      {/* Logo / Title */}
      <h2 style={{ fontSize: "18px", fontWeight: "bold", margin: 0 }}>
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
    </div>
  );
};

export default Navbar;
