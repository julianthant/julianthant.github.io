import { FC } from 'react';
import { montserrat } from '@/library/fonts';
import { Mail_Logo, Send_Icon } from '@/components/svgs';
import {
  Facebook_Link,
  Discord_Link,
  Instagram_Link,
  Github_Link,
  Linkedin_Link,
} from '@/components/SocialIcons';

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <section className="max-md:pb-14 min-h-screen flex items-center justify-center">
      <div className="container md:grid-flow-col md:auto-cols-fr md:m-auto grid md:pt-[61px] pt-[4.5rem] px-8">
        <div
          className={`${montserrat.className} max-md:pb-10 flex flex-col justify-center`}
        >
          <h1 className="font-bold text-[3.5rem]">
            Let&apos;s chat. <br />
            Tell me about your project.
          </h1>
          <p className="font-medium py-4 text-2xl">
            Let&apos;s create something together.
          </p>
          <div className="w-[17.5rem] space-y-8">
            <div className="flex items-center justify-center border rounded-sm bg-slate-100 shadow-sm mt-4 h-16 gap-3  scale-animation cursor-pointer">
              <div className="border-r pr-4 border-slate-200">
                <Mail_Logo className="mail-icon" />
              </div>
              <div className="pl-2">
                <h3 className="font-bold text-base">Mail me at</h3>
                <a
                  href="mailto:julianthant@gmail.com"
                  className="font-light text-sm text-accent-500 hover:text-accent-300"
                >
                  julianthant@gmail.com
                </a>
              </div>
            </div>
            <ul
              className="flex items-center justify-between"
              role="list"
              aria-label="social-links"
            >
              <Facebook_Link />
              <Instagram_Link />
              <Github_Link />
              <Discord_Link />
              <Linkedin_Link />
            </ul>
          </div>
        </div>
        <div className="py-6 px-4 shadow-sm bg-black text-white rounded-md h-full">
          <p className="text-sm">GET IN TOUCH</p>
          <h1 className="text-[3rem] font-black">Contact Me</h1>
          <p className="pb-2 font-bold">Your Name</p>
          <form
            target="_self"
            action="https://formsubmit.co/5385df37b9c3edd6ea761a3900d0f923"
            method="POST"
            className=""
          >
            <input
              type="text"
              name="name"
              className="contact-input rounded-md border focus-within:border-accent-400"
              placeholder="What is your name?"
              autoComplete="name"
              required
            />
            <p className="pb-2 font-bold">Your Email</p>
            <input
              type="email"
              name="email"
              className="contact-input rounded-md border focus-within:border-accent-400"
              placeholder="What is your email?"
              autoComplete="email"
              required
            />
            <p className="pb-2 font-bold">Your Message</p>
            <textarea
              name="message"
              id=""
              rows={5}
              className="contact-input rounded-md border focus-within:border-accent-400 resize-none"
              placeholder="What is your message?"
              required
            ></textarea>
            <button
              type="submit"
              className={`bg-accent-400 hover:bg-accent-300 text-white text-sm pl-6 pr-5 py-2 rounded-full font-bold flex items-center justify-center tracking-wider ${montserrat.className}`}
            >
              SUBMIT
              <Send_Icon className="w-6 h-6 ml-2" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default page;
