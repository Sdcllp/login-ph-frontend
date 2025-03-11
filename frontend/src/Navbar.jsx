import React, { useState } from "react";
import { FaBars } from "react-icons/fa";

const Navbar = ({ onLogout }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "12px 20px",
        backgroundColor: "#9fb6c3",
        color: "white",
        position: "relative",
      }}
    >
      {/* Left: Logo / Title */}
      <h2 style={{ fontSize: "18px", fontWeight: "bold", margin: 0 }}>
        SDC STUDIO LLC
      </h2>

      {/* Right: Menu Button for Mobile */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          background: "transparent",
          border: "none",
          color: "white",
          fontSize: "20px",
          cursor: "pointer",
          display: "none",
        }}
      >
        <FaBars />
      </button>

      {/* Right: Logout Button */}
      <div
        style={{
          display: menuOpen ? "flex" : "none",
          flexDirection: "column",
          position: "absolute",
          top: "100%",
          right: "0",
          backgroundColor: "#9fb6c3",
          padding: "10px",
          boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
        }}
      >
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

      {/* Desktop Logout Button */}
      <button
        onClick={onLogout}
        style={{
          backgroundColor: "#ff4d4d",
          color: "white",
          border: "none",
          padding: "8px 12px",
          borderRadius: "4px",
          cursor: "pointer",
          display: "block",
        }}
      >
        Logout
      </button>

      {/* Responsive CSS (Media Query) */}
      <style>
        {`
          @media (max-width: 768px) {
            button[onClick="setMenuOpen(!menuOpen)"] {
              display: block;
            }
            button[onClick="onLogout"] {
              display: none;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Navbar;
