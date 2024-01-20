import '../../styles/main.css';

import Codewars from './Codewars';
import Leetcode from './Leetcode';

import { useMediaQuery } from '@mui/material';
import { motion, useInView, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';

function animateComponent(component, x_value) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const isDesktop = useMediaQuery('(min-width: 600px)');
  const mainControls = useAnimation();

  const variants = isDesktop
    ? {
        hidden: { opacity: 0, x: x_value, y: 0 },
        visible: { opacity: 1, x: 0, y: 0 },
      }
    : {
        hidden: { opacity: 0, x: 0, y: 20 },
        visible: { opacity: 1, x: 0, y: 0 },
      };

  useEffect(() => {
    if (isInView) {
      mainControls.start(variants.visible);
    }
  }, [isInView]);

  return (
    <div ref={ref}>
      <motion.div
        variants={variants}
        initial={variants.hidden}
        animate={mainControls}
        transition={{ duration: 0.7 }}
      >
        {component}
      </motion.div>
    </div>
  );
}

export default function CodingDashboard() {
  return (
    <section className="dashboard | container padding-block-700">
      <h2 className="dashboard--heading fs-small-700 fw-medium">
        Coding Stats
      </h2>
      <div className="two-columns">
        {animateComponent(<Codewars />, -30)}
        {animateComponent(<Leetcode />, 30)}
      </div>
    </section>
  );
}
