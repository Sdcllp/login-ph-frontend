// PH Studio: src/pages/EmbedView.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const EmbedView = () => {
  const [isAllowed, setIsAllowed] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = new URLSearchParams(window.location.search).get("token");
    if (!token) return navigate("/login");

    axios
      .post("https://ph-backend.com/api/verify-token", { token })
      .then((res) => {
        if (res.data.valid) setIsAllowed(true);
        else navigate("/login");
      });
  }, []);

  if (!isAllowed) return <p>Checking...</p>;

  return (
    <div>
      <h2>🎯 Welcome to PH Studio Embed View</h2>
      {/* Show readonly content here */}
    </div>
  );
};

export default EmbedView;
