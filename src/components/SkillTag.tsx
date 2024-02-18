import { FC, ReactElement } from 'react';
import Image from 'next/image';
import { montserrat } from '@/library/fonts';

interface SkillTagProps {
  SkillIcon: React.ElementType;
  SkillLang: string;
  SkillLevel: string;
}

const SkillTag: FC<SkillTagProps> = ({ SkillIcon, SkillLang, SkillLevel }) => {
  return (
    <li className="bg-white text-black px-4 py-2 rounded-[0.23rem] flex items-center h-16 cursor-pointer space-x-4 hover:bg-slate-100 skills-tag leading-5 shadow-lg">
      <SkillIcon className="duration-500 skills-icon h-8 w-8" />
      <div>
        <h3 className="font-bold">{SkillLang}</h3>
        <p className={`skills-level ${montserrat.className}`}>{SkillLevel}</p>
      </div>
    </li>
  );
};

export default SkillTag;
