import { FC } from 'react';
import Image, { StaticImageData } from 'next/image';

interface ProjectTagProps {
  ProjectImage: StaticImageData;
  Link: string;
  Name: string;
  Year: string;
  Tag: string;
  Description: string;
}

const ProjectTag: FC<ProjectTagProps> = ({
  ProjectImage,
  Link,
  Name,
  Year,
  Tag,
  Description,
}) => {
  return (
    <div className="flex items-center justify-center max-lg:flex-col gap-8 max-lg:gap-12 text-black">
      <Image
        className="rounded-lg shadow-lg"
        src={ProjectImage}
        alt={Name}
        width={500}
        height={281}
        priority={true}
        quality={80}
      />
      <div className="space-y-4">
        <a href={Link} target="_blank" className="font-bold text-4xl">
          {Name}
        </a>
        <div className="flex items-center gap-8">
          <p className="rounded-full px-4 py-1 font-bold bg-accent-400 text-white">
            {Year}
          </p>
          <p className="text-base text-slate-500">{Tag}</p>
        </div>
        <p className="text-base font-normal">{Description}</p>
      </div>
    </div>
  );
};

export default ProjectTag;
