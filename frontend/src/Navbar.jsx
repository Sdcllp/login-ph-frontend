const Navbar = ({ onLogout }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        padding: "12px 20px",
        backgroundColor: "#9fb6c3",
        color: "white",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1000,
        height: "50px",
        boxSizing: "border-box",
      }}
    >
      <h2 style={{ fontSize: "18px", fontWeight: "bold", margin: 0 }}>
        SDC STUDIO LLC
      </h2>
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
