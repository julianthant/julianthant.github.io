import { FC } from 'react';
import { dm_sans } from '@/library/fonts';
import ProjectTag from '@/components/ProjectTag';

import YapsSocial from '@/assets/yaps-website.webp';
import ShoeStore from '@/assets/shoe-website.webp';

interface FeaturedProjectsProps {}

const FeaturedProjects: FC<FeaturedProjectsProps> = ({}) => {
  return (
    <div className="snap-start space-y-16 min-h-screen pt-[61px] flex flex-col justify-center items-center max-lg:pt-[88px] max-lg:pb-12">
      <div className="text-center space-y-1">
        <h2 className="font-bold text-4xl">Featured Projects</h2>
        <h3
          className={`text-base text-gray-500 font-medium ${dm_sans.className}`}
        >
          Full-Stack Web Applications
        </h3>
      </div>

      <ul role="list" className="grid gap-12">
        <li className="border-b border-slate-200 pb-12">
          <ProjectTag
            ProjectImage={YapsSocial}
            Link="https://stylenation.netlify.app"
            Name="Real-Time Messaging"
            Year="2024"
            Tag="Social Media"
            Description="This is the website I made for my dad's business. He opens a car showroom so I made him a website for his showroom. The website shows the cars he sells and ways to contact him."
          />
        </li>
        <li>
          <ProjectTag
            ProjectImage={ShoeStore}
            Link="https://solesteals.netlify.app"
            Name="Online Shoe Store"
            Year="2023"
            Tag="Business"
            Description="This website is made for the business called Barista Chaw Su. They train people to be baristas and also works as a cafe consultant. I made this so they have an easier time training people and for me to be able to look up recipes quickly."
          />
        </li>
      </ul>
    </div>
  );
};

export default FeaturedProjects;
