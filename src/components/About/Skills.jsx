import '../../styles/main.css';

import HTML_logo from '../../assets/icon-html.svg';
import CSS_logo from '../../assets/icon-css.svg';
import Javascript_logo from '../../assets/icon-javascript.svg';
import Astro_logo from '../../assets/icon-astro.svg';
import React_logo from '../../assets/icon-react.svg';
import Sass_logo from '../../assets/icon-sass.svg';
import Tailwind_logo from '../../assets/icon-tailwind.svg';
import Bootstrap_logo from '../../assets/icon-bootstrap.svg';
import Python_logo from '../../assets/icon-python.svg';
import Django_logo from '../../assets/icon-django.svg';
import C_Plus_Plus_logo from '../../assets/icon-cplusplus.svg';
import Visual_Basic_logo from '../../assets/icon-vb.svg';

import { motion, useInView, useAnimation } from 'framer-motion';
import { useRef, useEffect } from 'react';

function SkillTag(SkillIcon, SkillLang, SkillLevel) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    }
  }, [isInView]);

  return (
    <li ref={ref}>
      <motion.div
        variants={{
          hiddden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hiddden"
        animate={mainControls}
        transition={{ duration: 0.7, ease: 'easeInOut' }}
        trans
        className="skills--tag"
      >
        <img className="skills--icon" src={SkillIcon} alt="" />
        <div>
          <h3 className="skills--lang | fs-smsll-400 fw-bold">{SkillLang}</h3>
          <p className="skills--level | fw-regular fs-small-200">
            {SkillLevel}
          </p>
        </div>
      </motion.div>
    </li>
  );
}

export default function Skills() {
  return (
    <section className="skills | bg-primary-200 text-primary-400 padding-block-600">
      <div className="container">
        <h2 className="fs-small-700 fw-medium padding-block-400">
          <span className="skills--heading-line">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </span>
          Skills
        </h2>
        <ul role="list" className="skills--container">
          {SkillTag(HTML_logo, 'HTML', 'Intermediate')}
          {SkillTag(CSS_logo, 'CSS', 'Intermediate')}
          {SkillTag(Javascript_logo, 'Javascript', 'Intermediate')}
          {SkillTag(Astro_logo, 'Astro', 'Intermediate')}
          {SkillTag(React_logo, 'React', 'Intermediate')}
          {SkillTag(Sass_logo, 'Sass', 'Intermediate')}
          {SkillTag(Tailwind_logo, 'Tailwind', 'Beginner')}
          {SkillTag(Bootstrap_logo, 'Bootstrap', 'Beginner')}
          {SkillTag(Python_logo, 'Python', 'Intermediate')}
          {SkillTag(Django_logo, 'Django', 'Beginner')}
          {SkillTag(C_Plus_Plus_logo, 'C++', 'Beginner')}
          {SkillTag(Visual_Basic_logo, 'Visual Basic', 'Intermediate')}
        </ul>
      </div>
    </section>
  );
}
