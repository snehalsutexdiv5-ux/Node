import axios from "axios";
import React, { useEffect, useState } from "react";

export default function ProfilePage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/user/profile`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        console.log("PROFILE:", res.data);

        setUser(res.data.user);
      } catch (err) {
        console.log(err.response?.data || err.message);
      }
    };

    fetchProfile();
  }, []);

  if (!user) return <h2>Loading...</h2>;

  return (
    <div>
      <h1>Welcome @{user.username}</h1>
      <p>{user.email}</p>
    </div>
  );
}