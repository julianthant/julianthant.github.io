import '../../styles/main.css';

import heading_image from '../../assets/main-img.avif';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

export default function Heading() {
  const [text] = useTypewriter({
    words: ['Full Stack Engineer', 'Gym Rat', 'Badmintonist'],
    loop: {},
  });

  return (
    <section className="heading | bg-primary-100 text-primary-400">
      <div className="container">
        <div className="two-columns">
          <div className="heading--intro | flow">
            <h1 className="fs-primary-heading fw-bold text-primary-400">
              Hi, I am Julian, <br />
              <span className="text-accent-400">{text}</span>
              <Cursor cursorColor="hsl(0, 100%, 70%)" />
            </h1>
            <p className="fs-small-400 fw-regular">
              Hello World! I am Julian, an ambitious junior developer who is
              looking for opportunities to learn more. I have a wide skill-set,
              but yet to master most of them. If you have any opportunities for
              me to refine and improve my current skill-set, please feel free to
              contact me.
            </p>
            <button className="heading--button | square-button">
              Download Resume
            </button>
          </div>
          <div className="heading--main-img-container | small-reverse-order">
            <img className="heading--main-img" src={heading_image} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
