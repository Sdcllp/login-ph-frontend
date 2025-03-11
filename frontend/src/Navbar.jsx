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
        width: "100%",
        top: 0,
        left: 0,
        zIndex: 1000,
      }}
    >
      {/* Left Side - Branding */}
      <h2 style={{ margin: 0, fontSize: "20px", color: "#fff" }}>STUDIO LLC</h2>

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
              flex-direction: row;
              justify-content: space-between;
              padding: 10px;
            }
            h2 {
              font-size: 18px;
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
