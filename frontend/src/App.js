import React, { useState, useEffect } from "react";
import Login from "./Login";
import EmployeeLayout from "./EmployeeLayout";
import Navbar from "./Navbar";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check authentication on load
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []);

  const handleLogin = () => {
    localStorage.setItem("token", "dummy_token"); // Fake token for testing
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };

  return (
    <div style={{ fontFamily: "Calibri, sans-serif" }}> {/* ✅ Applied Calibri font */}
      {isAuthenticated ? (
        <>
          <Navbar onLogout={handleLogout} />
          <EmployeeLayout />
        </>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
