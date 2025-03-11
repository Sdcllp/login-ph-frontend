import React, { useState } from "react";

const Navbar = ({ onLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "12px 20px",
        backgroundColor: "#9fb6c3",
        color: "white",
        width: "100%",
        position: "relative",
        boxSizing: "border-box", // Important for proper width
        overflow: "hidden",     // Prevents layout overflow
      }}
    >
      <h2 style={{ fontSize: "18px", fontWeight: "bold", margin: 0 }}>
        SDC STUDIO LLC
      </h2>

      <div
        className="hamburger"
        onClick={toggleMenu}
        style={{ display: "none", cursor: "pointer" }}
      >
        <div style={{ width: "25px", height: "3px", backgroundColor: "white", margin: "4px" }}></div>
        <div style={{ width: "25px", height: "3px", backgroundColor: "white", margin: "4px" }}></div>
        <div style={{ width: "25px", height: "3px", backgroundColor: "white", margin: "4px" }}></div>
      </div>

      <button
        onClick={onLogout}
        style={{
          backgroundColor: "#ff4d4d",
          color: "white",
          border: "none",
          padding: "6px 15px",
          borderRadius: "4px",
          cursor: "pointer",
          minWidth: "80px",
          marginRight: "10px", // Added spacing for proper alignment
        }}
      >
        Logout
      </button>

      {isMenuOpen && (
        <div
          style={{
            position: "absolute",
            top: "60px",
            right: "20px",
            backgroundColor: "#9fb6c3",
            borderRadius: "4px",
            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
            zIndex: 1000,
            padding: "10px",
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
              width: "100%",
            }}
          >
            Logout
          </button>
        </div>
      )}

      <style jsx>{`
        @media (max-width: 768px) {
          .hamburger {
            display: block;
          }
          button {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default Navbar;
