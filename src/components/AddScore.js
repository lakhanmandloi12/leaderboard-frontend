import React, { useState } from "react";
import axios from "axios";

const AddScore = ({ refreshLeaderboard }) => {
  const [username, setUsername] = useState("");
  const [score, setScore] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/leaderboard", { username, score });
      refreshLeaderboard();
      setUsername("");
      setScore("");
    } catch (err) {
      console.error("Error adding score:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add New Score</h3>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Score"
        value={score}
        onChange={(e) => setScore(e.target.value)}
        required
      />
      <button type="submit">Add Score</button>
    </form>
  );
};

export default AddScore;
