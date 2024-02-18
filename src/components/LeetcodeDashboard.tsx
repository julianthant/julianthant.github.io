import { fetchStats } from '@/helpers/fetchStats';
import { montserrat, dm_sans } from '@/library/fonts';

interface LeetcodeDashboardProps {}

const LeetcodeDashboard = async ({}) => {
  const stats = await fetchStats(
    'https://leetcode-stats-api.herokuapp.com/SoyJuju'
  );

  return (
    <div className="bg-slate-100 text-black py-3 px-3 rounded-lg shadow-lg flex flex-col items-center justify-center gap-6 h-48">
      <div className="flex items-center justify-center">
        <a
          href="https://leetcode.com/SoyJuju/"
          className={`text-base ${montserrat.className}`}
        >
          Leetcode Statistics
        </a>
      </div>
      <div
        className={`flex items-center justify-center text-xl font-bold ${dm_sans.className} text-center 2xl:gap-8 statsMD:gap-5 statsSM:gap-8 max-statsSM:gap-5`}
      >
        <div className="2xl:gap-8 statsXL:flex statsXL:space-y-0 statsMD:block statsMD:space-y-3 statsMD:gap-5 statsSM:flex statsSM:space-y-0 statsSM:gap-8 max-statsSM:space-y-3">
          <div>
            <p>
              <span className="text-accent-400">#</span>
              {stats.ranking}
            </p>
            <p className="text-xs font-medium">Leaderboard Position</p>
          </div>

          <div>
            <p>{stats.easySolved}</p>
            <p className="text-xs font-medium">Easy Solved</p>
          </div>
        </div>
        <div className="2xl:gap-8 statsXL:flex statsXL:space-y-0 statsMD:block statsMD:space-y-3 statsMD:gap-5 statsSM:flex statsSM:space-y-0 statsSM:gap-8 max-statsSM:space-y-3">
          <div>
            <p>{stats.mediumSolved}</p>
            <p className="text-xs font-medium">Medium Solved</p>
          </div>

          <div>
            <p>{stats.hardSolved}</p>
            <p className="text-xs font-medium">Hard Solved</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeetcodeDashboard;
