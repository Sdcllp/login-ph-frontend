const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        padding: "10px 20px",
        backgroundColor: "#9fb6c3",
        color: "white",
        position: "fixed",
        top: 0,
        left: 0,
        height: "35px",
        boxSizing: "border-box",
        zIndex: 9000,
      }}
    >
      <h2 style={{ fontSize: "18px", fontWeight: "bold", margin: 0 }}>
        SDC STUDIO LLC
      </h2>
      <button
        style={{
          backgroundColor: "#008080",
          color: "white",
          borderRadius: "50%",  // Yehi sahi value hai
          cursor: "pointer",
          width: "30px",        // Thoda bada size rakhenge to clear dikhega
          height: "30px", 
          border: "none",       // Extra border ko remove karein
        }}
        onClick={() => alert("Logout Clicked")}  // Example functionality
      >
        🚪
      </button>
    </div>
  );
};

export default Navbar;
