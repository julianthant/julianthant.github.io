import MyPortfolioWebsite from '../../assets/my-portfolio.png';
import CoffeeWebsite from '../../assets/coffee-website.png';
import ToDoListWebsite from '../../assets/todolist-website.png';
import CarShowroom from '../../assets/dad-showroom.png';

let timelineElements = [
  {
    id: 1,
    title: 'Portfolio Website',
    url: 'https://julianhein.netlify.app',
    description:
      'The portfolio website I currently use. This website is built with Astro, React and SCSS which is more complex compared to the first portfolio website. The website structure and theme is similar, but the main difference is the frameworks. The coding dashboard is also linked with both codewars and leetcode apis to get the latest updates on my profile. The basic version was <a href="http://julianhein.great-site.net" target="_blank">http://julianhein.great-site.net</a>.',
    date: '2023',
    tag: 'Portfolio',
    image: MyPortfolioWebsite,
  },
  {
    id: 2,
    title: 'Coffee Website',
    url: 'https://baristachawsu.netlify.app',
    description:
      'This is an improved version of the first coffee website I made for Barista Chaw Su. This improved version is built upon Astro, React and SCSS. The design is quite similar but the frameworks used are different. The basic one was <a href="http://baristachawsu.great-site.net" target="_blank">http://baristachawsu.great-site.net</a>.',
    date: '2023',
    tag: 'Educational',
    image: CoffeeWebsite,
  },
  {
    id: 3,
    title: 'Car Showroom Website',
    url: 'https:stylenation.netlify.app',
    description:
      "This is the website I made for my dad's business. He opens a car showroom so I made him a website for his showroom. The website shows the cars he sells and ways to contact him.",
    date: '2023',
    tag: 'Business',
    image: CarShowroom,
  },
  {
    id: 4,
    title: 'To Do List',
    url: 'https://todolist-juju.netlify.app',
    description:
      'This is a todolist with advanced features such as login and signout. The user data is stored in a mongo db database and the items of the users are linked with the id of the user. This is made up of the MERN stack and the backend is hosted on Render. The basic version of the todolist can be found in <a href="https://juju-to-do-list.netlify.app" target="_blank">https://juju-to-do-list.netlify.app</a>.',
    date: '2023',
    tag: 'Utility',
    image: ToDoListWebsite,
  },
];

export default timelineElements;
