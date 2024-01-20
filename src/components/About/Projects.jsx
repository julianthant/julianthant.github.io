import '../../styles/main.css';

import CarShowroom from '../../assets/dad-showroom.png';
import CoffeeWebsite from '../../assets/coffee-website.png';
import ToDoListWebsite from '../../assets/todolist-website.png';

import { useMediaQuery } from '@mui/material';
import { motion, useInView, useAnimation } from 'framer-motion';
import { useRef, useEffect } from 'react';

function animateComponent(component, x_value) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const isDesktop = useMediaQuery('(min-width: 600px)');
  const mainControls = useAnimation();

  const variants = isDesktop
    ? {
        hidden: { opacity: 0, y: 0, x: x_value },
        visible: { opacity: 1, y: 0, x: 0 },
      }
    : {
        hidden: { opacity: 0, x: 0, y: 20 },
        visible: { opacity: 1, x: 0, y: 0 },
      };

  useEffect(() => {
    console.log('isInView:', isInView);
    if (isInView) {
      mainControls.start(variants.visible);
    }
  }, [isInView]);

  return (
    <motion.div
      variants={variants}
      initial={variants.hidden}
      animate={mainControls}
      transition={{ duration: 0.7 }}
      ref={ref}
    >
      {component}
    </motion.div>
  );
}

function ProjectTag(Image, Link, Name, Year, Tag, Description) {
  const divComp = (
    <div className="projects--detail">
      <a href={Link} className="fs-secondary-heading fw-black text-primary-400">
        {Name}
      </a>
      <div className="projects--description">
        <p className="projects--year | year-button fw-medium">{Year}</p>
        <p className="regular fs-450 text-primary-300">{Tag}</p>
      </div>
      <p className="fs-400 fw-regular">{Description}</p>
    </div>
  );

  return (
    <li className="projects--tag">
      {animateComponent(
        <img className="projects--image" src={Image} alt="" />,
        -30
      )}
      {animateComponent(divComp, 30)}
    </li>
  );
}

export default function Projects() {
  return (
    <section className="projects bg-primary-100 text-primary-400 padding-block-800">
      <div className="container">
        <h2 className="fs-small-700 fw-medium">Featured Works</h2>
        <ul role="list" className="projects--container">
          {ProjectTag(
            CarShowroom,
            'https:stylenation.netlify.app',
            'Car Showroom Website',
            '2023',
            'Business',
            "This is the website I made for my dad's business. He opens a car showroom so I made him a website for his showroom. The website shows the cars he sells and ways to contact him."
          )}
          {ProjectTag(
            CoffeeWebsite,
            'https://baristachawsu.netlify.app',
            'Coffee Recipes Website',
            '2023',
            'Educational',
            'This website is made for the business called Barista Chaw Su. They train people to be baristas and also works as a cafe consultant. I made this so they have an easier time training people and for me to be able to look up recipes quickly.'
          )}
          {ProjectTag(
            ToDoListWebsite,
            'https://todolist-juju.netlify.app',
            'To Do List',
            '2023',
            'Utility',
            'This is a todolist with advanced features such as login and signout. The user data is stored in a mongo db database and the items of the users are linked with the id of the user. This is made up of the MERN stack and the backend is hosted on Render.'
          )}
        </ul>
      </div>
    </section>
  );
}
