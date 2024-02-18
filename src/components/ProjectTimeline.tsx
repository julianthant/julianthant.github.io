'use client';

import Image from 'next/image';

import timelineElements from '@/data/TimelineElements';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const ProjectTimeline = ({}) => {
  return (
    <VerticalTimeline lineColor="hsl(234, 30%, 18%)" layout="2-columns">
      {timelineElements.map((element) => (
        <VerticalTimelineElement visible={true} key={element.id}>
          <Image className="py-4" src={element.image} alt={element.title} />
          <a className="text-xl" href={element.url}>
            {element.title}
          </a>
          <div className="flex items-center gap-8 pb-4">
            <p className="font-medium rounded-full px-4 py-1 bg-accent-400 text-white">
              {element.date}
            </p>
            <p className="text-base">{element.tag}</p>
          </div>
          <div
            className="timeline--description"
            dangerouslySetInnerHTML={{ __html: element.description }}
          ></div>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
};

export default ProjectTimeline;
