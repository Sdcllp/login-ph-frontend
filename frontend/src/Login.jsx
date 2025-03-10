import React, { useState } from "react";

// Define the API_BASE_URL here without login or users part
const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL ||
  (window.location.hostname === "localhost"
    ? "http://localhost:5000/api"
    : "https://login-ph-backend.vercel.app/api/auth");

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ email, password }); // ✅ Debugging

    try {
      const res = await fetch(`${API_BASE_URL}/login`, {
        // Use `login` endpoint here
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      console.log("Server Response:", data); // ✅ Debugging

      if (!res.ok) throw new Error(data.msg || "Login failed");

      localStorage.setItem("token", data.token);
      onLogin(); // Call onLogin callback passed from parent (App.js)
    } catch (err) {
      setError(err.message); // Show error message if login fails
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
