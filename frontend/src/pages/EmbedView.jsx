import React, { useEffect, useState } from "react";
import axios from "axios";

const EmbedView = () => {
  const [isAllowed, setIsAllowed] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = new URLSearchParams(window.location.search).get("token");

    if (!token) {
      setLoading(false);
      return;
    }

    axios
      .post(
        "https://loginph-backend-new.vercel.app/api/verify-token", // ✅ your Vercel backend
        { token },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      )
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
    </div>
  );
};

export default EmbedView;
