import '../../styles/main.css';

import twitter_logo from '../../assets/icon-twitter.svg';
import leetcode_logo from '../../assets/icon-leetcode.svg';
import mail_logo from '../../assets/icon-mail.svg';

import { motion, useInView, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';

function animateComponent(component, x_value, className) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    }
  }, [isInView]);

  return (
    <div ref={ref} className={className}>
      <motion.div
        variants={{
          hidden: { opacity: 0, x: x_value, y: 0 },
          visible: { opacity: 1, x: 0, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.7 }}
      >
        {component}
      </motion.div>
    </div>
  );
}

export default function ContactMe() {
  const introduction = (
    <div className="contact--introduction">
      <h1 className="contact-heading | fs-small-950 fw-bold">
        Let's chat. <br />
        Tell me about your project.
      </h1>
      <p className="contact--subintro | fs-small-600 fw-medium padding-block-300">
        Let's create something together.
      </p>
      <div className="contact--email-container">
        <img className="contact--icon" src={mail_logo} alt="" />
        <div>
          <h3 className="contact--email-heading | fs-smsll-400 fw-bold">
            Mail me at
          </h3>
          <a
            href="mailto:julianthant@gmail.com"
            className="contact--email | fw-regular fs-small-200"
          >
            julianthant@gmail.com
          </a>
        </div>
      </div>
    </div>
  );

  const email_form = (
    <div className="contact--information | text-primary-400 bg-neutral-100">
      <p className="contact--text | fs-small-200">GET IN TOUCH</p>
      <h1 className="contact-heading | fs-primary-heading fw-black">
        Contact Me
      </h1>
      <p className="contact--subheading | padding-block-200 fw-bold">
        Your Name
      </p>
      <form
        target="_self"
        action="https://formsubmit.co/5385df37b9c3edd6ea761a3900d0f923"
        method="POST"
        className="contact--form"
      >
        <input
          type="text"
          name="name"
          className="contact--input | padding-block-100"
          placeholder="What is your name?"
          required
        />
        <p className="contact--subheading | padding-block-200 fw-bold">
          Your Email
        </p>
        <input
          type="email"
          name="email"
          className="contact--input | padding-block-100"
          placeholder="What is your email?"
          required
        />
        <p className="contact--subheading | padding-block-200 fw-bold">
          Your Message
        </p>
        <textarea
          name="message"
          id=""
          rows="5"
          className="contact--input padding-block-100"
          placeholder="What is your message?"
          required
        ></textarea>
        <input
          type="hidden"
          name="_next"
          value="https://julianhein.netlify.app/contact"
        ></input>
        <button type="submit" className="contact--submit | square-button">
          Send
        </button>
      </form>
    </div>
  );

  return (
    <section className="contact | container">
      {animateComponent(introduction, -30, 'contact--introduction-div')}
      {animateComponent(email_form, 30, 'contact--information-div')}
    </section>
  );
}
