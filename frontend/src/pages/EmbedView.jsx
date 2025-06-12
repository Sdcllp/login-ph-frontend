// PH Studio frontend EmbedView.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const EmbedView = () => {
  const [isAllowed, setIsAllowed] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = new URLSearchParams(window.location.search).get("token");
    if (!token) {
      navigate("/login");
      return;
    }

    axios
      .post("https://ph-studio-backend.onrender.com/api/verify-token", {
        token,
      }) // 🟡 your backend URL here
      .then((res) => {
        if (res.data.valid) setIsAllowed(true);
        else navigate("/login");
      })
      .catch(() => navigate("/login"));
  }, []);

  if (!isAllowed) return <p>Checking access...</p>;

  return (
    <div>
      <h2>✅ Embed View Loaded Without Login</h2>
      {/* Add your actual PH Studio content here */}
    </div>
  );
};

export default EmbedView;
