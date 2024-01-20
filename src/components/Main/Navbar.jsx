import '../../styles/main.css';
import { useState, useEffect } from 'react';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';

import github_icon from '../../assets/icon-github.svg';
import hamburger_icon from '../../assets/icon-hamburger.svg';

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    window.addEventListener('resize', () => setMobileMenu(false));

    return () => {
      removeEventListener('resize', () => setMobileMenu(false));
    };
  }, [mobileMenu]);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
      setMobileMenu(false);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: '-100%' },
      }}
      animate={hidden ? 'hidden' : 'visible'}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
      className="navbar | bg-primary-100 padding-block-300"
    >
      <div className={mobileMenu ? 'navbar--mobile-shadow' : ''}>
        <div className="container">
          <div className="navbar--wrapper">
            <a href="" className="fw-bold fs-small-700 text-secondary-400">
              julian.hein
            </a>
            <button
              onClick={() => {
                setMobileMenu(!mobileMenu);
              }}
              className="navbar--mobile-toggle"
              aria-controls="mobile-navigation"
              aria-expanded="false"
            >
              <img
                className="navbar--icon-hamburger"
                src={hamburger_icon}
                alt=""
                aria-hidden="true"
              />
              <span className="visually-hidden">Menu</span>
            </button>
            <nav
              className={'navbar--navigation' + (mobileMenu ? '-mobile' : '')}
            >
              <ul role="list" className="navbar--list">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/blog/">About</a>
                </li>
                <li>
                  <a href="/projects/">Projects</a>
                </li>
                <li>
                  <a href="/contact/">Contact Me</a>
                </li>
              </ul>
            </nav>
            <a href="https://github.com/SoyJuju" target="_blank">
              <img className="navbar--github-icon" src={github_icon} alt="" />
            </a>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
