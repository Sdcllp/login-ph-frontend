import React, { useEffect, useState } from "react";
import axios from "axios";

const EmbedView = () => {
  const [isAllowed, setIsAllowed] = useState(false);
  const [loading, setLoading] = useState(true); // loading state

  useEffect(() => {
    const token = new URLSearchParams(window.location.search).get("token");

    if (!token) {
      setLoading(false);
      return;
    }

    axios
      .post("https://ph-studio-backend.onrender.com/api/verify-token", {
        token,
      })
      .then((res) => {
        if (res.data.valid) {
          setIsAllowed(true);
        }
      })
      .catch((err) => {
        console.error("Token verification failed", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <p>⏳ Checking token...</p>;

  if (!isAllowed) return <p>🔒 Unauthorized access</p>;

  return (
    <div>
      <h2>✅ Embed View Loaded Without Login</h2>
      {/* Add your actual content here */}
    </div>
  );
};

export default EmbedView;
