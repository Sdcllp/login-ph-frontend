import React, { useState, useEffect } from "react";
import Login from "./Login";
import EmployeeLayout from "./EmployeeLayout";
import Navbar from "./Navbar";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []);

  const handleLogin = () => {
    localStorage.setItem("token", "dummy_token");
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };

  return (
    <div style={{ width: "100vw", minHeight: "100vh" }}> {/* Overflow removed */}
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
