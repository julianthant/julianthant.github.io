import '../../styles/main.css';

import { useState, useEffect } from 'react';

export default function Codewars() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://www.codewars.com/api/v1/users/JulianHein')
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        console.log(json);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="codewars | dashboard--tag">
      <a
        href="www.codewars.com/users/JulianHein"
        className="codewars--title | title fs-small-800 fw-bold text-neutral-100"
      >
        Codewars Dashboard
      </a>
      <p className="codewars--info | info">Username: {data.username}</p>
      {data.ranks &&
      typeof data.ranks === 'object' &&
      'overall' in data.ranks ? (
        <div className="codewars--ranks">
          <p className="codewars--info | info">
            Rank: {data.ranks.overall.name}
          </p>
        </div>
      ) : (
        <p className="info">No overall rank available.</p>
      )}
      {data.ranks &&
      typeof data.ranks === 'object' &&
      'overall' in data.ranks ? (
        <div className="codewars--ranks">
          <p className="codewars--info | info">
            Score: {data.ranks.overall.score}
          </p>
        </div>
      ) : (
        <p className="info">No overall rank available.</p>
      )}
      <p className="codewars--info | info">
        Leaderboard Position: #{data.leaderboardPosition}
      </p>
      {data.codeChallenges &&
      typeof data.codeChallenges === 'object' &&
      'totalCompleted' in data.codeChallenges ? (
        <p className="codewars--info | info">
          Total Solved: {data.codeChallenges.totalCompleted} katas
        </p>
      ) : (
        <p className="info">No overall rank available.</p>
      )}
    </div>
  );
}
