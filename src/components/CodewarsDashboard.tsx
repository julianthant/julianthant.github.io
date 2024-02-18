import { fetchStats } from '@/helpers/fetchStats';
import { montserrat, dm_sans } from '@/library/fonts';

interface CodewarsDashboardProps {}

const CodewarsDashboard = async ({}) => {
  const stats = await fetchStats(
    'https://www.codewars.com/api/v1/users/JulianHein'
  );

  return (
    <div className="bg-slate-100 text-black py-3 px-3 rounded-lg shadow-lg flex flex-col items-center justify-center gap-6 h-48">
      <div>
        <a
          href="www.codewars.com/users/JulianHein"
          className={`text-base ${montserrat.className}`}
        >
          Codewars Statistics
        </a>
      </div>

      <div
        className={`flex items-center justify-center text-xl font-bold ${dm_sans.className} text-center 2xl:gap-8 statsMD:gap-5 statsSM:gap-8 max-statsSM:gap-5`}
      >
        <div className="2xl:gap-8 statsXL:flex statsXL:space-y-0 statsMD:block statsMD:space-y-3 statsMD:gap-5 statsSM:flex statsSM:space-y-0 statsSM:gap-8 max-statsSM:space-y-3">
          <div>
            <p>
              <span className="text-accent-400">#</span>
              {stats.leaderboardPosition}
            </p>
            <p className="text-xs font-medium">Leaderboard Position</p>
          </div>

          <div>
            <p>
              {stats.ranks.overall.name[0]}
              <span className="text-accent-400">kyu</span>
            </p>
            <p className="text-xs font-medium">Overall Ranking</p>
          </div>
        </div>

        <div className="2xl:gap-8 statsXL:flex statsXL:space-y-0 statsMD:block statsMD:space-y-3 statsMD:gap-5 statsSM:flex statsSM:space-y-0 statsSM:gap-8 max-statsSM:space-y-3">
          <div>
            <p>{stats.ranks.overall.score}</p>
            <p className="text-xs font-medium">Total Points</p>
          </div>

          <div>
            <p>{stats.codeChallenges.totalCompleted}</p>
            <p className="text-xs font-medium">Katas Solved</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodewarsDashboard;
