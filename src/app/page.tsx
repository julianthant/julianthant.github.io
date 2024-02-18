import Image from 'next/image';
import HeadingImage from '@/assets/main-img.webp';
import Typewriter from '@/components/Typewriter';
import { dm_sans } from '@/library/fonts';
import {
  Facebook_Link,
  Instagram_Link,
  Linkedin_Link,
} from '@/components/SocialIcons';

const page = () => {
  return (
    <section className="flex items-center justify-center min-h-screen pt-[61px] container px-8">
      <div className="flex gap-x-24">
        <div className="max-lg:hidden">
          <ul
            className="flex flex-col h-full justify-center gap-8"
            role="list"
            aria-label="social-links"
          >
            <Facebook_Link />
            <Instagram_Link />
            <Linkedin_Link />
          </ul>
        </div>
        <div className="md:grid-flow-col md:m-auto grid place-items-center md:gap-x-16 max-md:gap-y-8">
          <div>
            <div className="font-bold max-w-[24.6rem]">
              <h1 className="text-[2.75rem]">
                Hi, I&apos;m <span className="text-accent-400">Julian</span>{' '}
                <br />
              </h1>
              <Typewriter />
            </div>
            <p className={`pt-3 pb-6 ${dm_sans.className} text-gray-500`}>
              Hello World! I am Julian, an ambitious junior developer who is
              looking for opportunities to learn more. I have a wide skill-set,
              but yet to master most of them. If you have any opportunities for
              me to refine and improve my current skill-set, please feel free to
              contact me.
            </p>
            <a href="https://postimg.cc/Z0BVcwmb" target="_blank">
              <button
                aria-label="resume button"
                className={`bg-accent-400 px-5 py-[0.4rem] font-bold text-base text-white hover:opacity-70 rounded-md ${dm_sans.className}`}
              >
                Download Resume
              </button>
            </a>
          </div>
          <div className="flex items-center justify-end max-md:-order-1 w-[35rem] max-xl:w-[28rem] max-lg:w-[24rem] max-md:w-auto">
            <Image
              src={HeadingImage}
              height={312}
              width={512}
              alt="Julian"
              priority={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
