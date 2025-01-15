import React, { useState, useEffect } from "react";
import axios from "axios";

const Leaderboard = () => {
  const [scores, setScores] = useState([]);

  const fetchLeaderboard = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/leaderboard");
      setScores(response.data);
    } catch (err) {
      console.error("Error fetching leaderboard:", err);
    }
  };

  useEffect(() => {
    fetchLeaderboard();
  }, []);

  return (
    <div>
      <h3>Leaderboard</h3>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Username</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {scores.map((score, index) => (
            <tr key={score._id}>
              <td>{index + 1}</td>
              <td>{score.username}</td>
              <td>{score.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
