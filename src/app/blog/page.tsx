import { FC } from 'react';
import SkillTag from '@/components/SkillTag';
import { dm_sans } from '@/library/fonts';
import CodewarsDashboard from '@/components/CodewarsDashboard';
import LeetcodeDashboard from '@/components/LeetcodeDashboard';

import { HTML_Logo } from '@/components/svgs';
import { CSS_Logo } from '@/components/svgs';
import { JS_Logo } from '@/components/svgs';
import { TS_Logo } from '@/components/svgs';
import { SASS_Logo } from '@/components/svgs';
import { React_Logo } from '@/components/svgs';
import { Python_Logo } from '@/components/svgs';
import { Tailwind_Logo } from '@/components/svgs';
import { Astro_Logo } from '@/components/svgs';
import { CPlusPlus_Logo } from '@/components/svgs';
import { NextJS_Logo } from '@/components/svgs';
import { NodeJS_Logo } from '@/components/svgs';

interface pageProps {}

const skills = [
  { logo: HTML_Logo, lang: 'HTML', level: 'Advanced' },
  { logo: CSS_Logo, lang: 'CSS', level: 'Intermediate' },
  { logo: JS_Logo, lang: 'Javascript', level: 'Intermediate' },
  { logo: TS_Logo, lang: 'Typescript', level: 'Intermediate' },
  { logo: React_Logo, lang: 'React', level: 'Intermediate' },
  { logo: NextJS_Logo, lang: 'Next JS', level: 'Intermediate' },
  { logo: NodeJS_Logo, lang: 'Node JS', level: 'Intermediate' },
  { logo: Python_Logo, lang: 'Python', level: 'Intermediate' },
  { logo: Tailwind_Logo, lang: 'Tailwind', level: 'Intermediate' },
  { logo: SASS_Logo, lang: 'SASS', level: 'Intermediate' },
  { logo: Astro_Logo, lang: 'Astro', level: 'Intermediate' },
  { logo: CPlusPlus_Logo, lang: 'C++', level: 'Beginner' },
];

const page: FC<pageProps> = ({}) => {
  return (
    <section className="min-h-screen pt-[83px] flex flex-col">
      <div className="grid grid-flow-row flex-grow gap-10">
        <div className="container px-8 flex flex-col justify-center gap-10">
          <div className="text-center space-y-2">
            <h2 className="font-bold text-4xl">Dashboard</h2>
            <h3
              className={`text-base text-gray-500 font-medium ${dm_sans.className}`}
            >
              Accquired Skills
            </h3>
          </div>
          <div className="grid statsMD:grid-flow-col auto-cols-fr gap-12">
            <CodewarsDashboard />
            <LeetcodeDashboard />
          </div>
        </div>
        <div className="bg-accent-100 gap-10 flex-grow justify-center flex flex-col py-8">
          <div className="text-center space-y-2">
            <h2 className="font-bold text-4xl">Learned Languages</h2>
            <h3
              className={`text-base text-gray-500 font-medium ${dm_sans.className}`}
            >
              Frameworks & Libraries & Modules
            </h3>
          </div>
          <div className="container px-8">
            <ul role="list" className="skills-container gap-x-12 gap-y-10">
              {skills.map((skill, index) => (
                <SkillTag
                  key={index}
                  SkillIcon={skill.logo}
                  SkillLang={skill.lang}
                  SkillLevel={skill.level}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
