import '../../styles/main.css';
import { useState, useEffect } from 'react';

export default function Codewars() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://leetcode-stats-api.herokuapp.com/SoyJuju')
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        console.log(json);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="leetcode | dashboard--tag">
      <a
        href="https://leetcode.com/SoyJuju/"
        className="leetcode--title | title fs-small-800 fw-bold text-neutral-100"
      >
        Leetcode Dashboard
      </a>
      <p className="leetcode--info | info">Username: SoyJuju</p>
      <p className="leetcode--info | info">Score: {data.contributionPoints}</p>
      <p className="leetcode--info | info">
        Leaderboard Position: #{data.ranking}
      </p>
      <p className="leetcode--info | info">Hard Solved: {data.hardSolved}</p>
      <p className="leetcode--info | info">Total Solved: {data.totalSolved}</p>
    </div>
  );
}
