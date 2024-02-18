import { FC } from 'react';
import { dm_sans } from '@/library/fonts';

import FeaturedProjects from '@/components/FeaturedProjects';
import ProjectTimeline from '@/components/ProjectTimeline';

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <section className="container px-8 snap-y snap-mandatory">
      <FeaturedProjects />
      <div className="snap-start space-y-16 min-h-screen pt-[88px] flex flex-col justify-center items-centermax-lg:pb-12">
        <div className="text-center space-y-1">
          <h2 className="font-bold text-4xl">Projects Timeline</h2>
          <h3
            className={`text-base text-gray-500 font-medium ${dm_sans.className}`}
          >
            All Projects I Have Worked On
          </h3>
        </div>

        <ProjectTimeline />
      </div>
    </section>
  );
};

export default page;
