import React from "react";

const Navbar = ({ onLogout }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "15px 20px",
        backgroundColor: "#9fb6c3",
        color: "white",
        width: "100%",
        position: "fixed",
        top: 0,
        left: 0,
        height: "60px", // Navbar ki height set kar di
        zIndex: 1000, // Upar rahne ke liye
        boxSizing: "border-box", // Proper padding handle karega
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
          position: "absolute",
          right: "20px", // Logout button ko right side fix kiya
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
