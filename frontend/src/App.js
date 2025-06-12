import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom"; // ✅ Import Route & Routes
import Login from "./Login";
import EmployeeLayout from "./EmployeeLayout";
import Navbar from "./Navbar";
import EmbedView from "./pages/EmbedView";

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
    <div style={{ fontFamily: "Calibri, sans-serif" }}>
      <Routes>
        <Route
          path="/embed-view"
          element={<EmbedView />}
        />
        {/* 👇 Default UI based on login status */}
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <>
                <Navbar onLogout={handleLogout} />
                <EmployeeLayout />
              </>
            ) : (
              <Login onLogin={handleLogin} />
            )
          }
        />
      </Routes>
    </div>
  );
};

export default App;
