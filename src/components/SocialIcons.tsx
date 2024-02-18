import {
  FB_Logo,
  IG_Logo,
  Github_Logo,
  Linkedin_Logo,
  Discord_Logo,
} from '@/components/svgs';

export const Github_Link = () => (
  <li>
    <a
      aria-label="github"
      href="https://www.discordapp.com/users/495637061265522708"
      target="_blank"
      rel="noreferrer"
    >
      <Github_Logo className="hover:opacity-60 cursor-pointer" />
    </a>
  </li>
);

export const Linkedin_Link = () => (
  <li>
    <a
      aria-label="linkedin"
      href="https://www.linkedin.com/in/julian-hein-0a1504289/"
      target="_blank"
      rel="noreferrer"
    >
      <Linkedin_Logo className="hover:opacity-60 cursor-pointer" />
    </a>
  </li>
);

export const Instagram_Link = () => (
  <li>
    <a
      aria-label="instagram"
      href="https://instagram.com/disis_julian?igshid=OGQ5ZDc2ODk2ZA=="
      target="_blank"
      rel="noreferrer"
    >
      <IG_Logo className="hover:opacity-60 cursor-pointer" />
    </a>
  </li>
);

export const Discord_Link = () => (
  <li>
    <a
      aria-label="discord"
      href="https://www.discordapp.com/users/495637061265522708"
      target="_blank"
      rel="noreferrer"
    >
      <Discord_Logo className="hover:opacity-60 cursor-pointer" />
    </a>
  </li>
);

export const Facebook_Link = () => (
  <li>
    <a
      aria-label="facebook"
      href="https://facebook.com/julianhein.ais"
      target="_blank"
      rel="noreferrer"
    >
      <FB_Logo className="hover:opacity-60 cursor-pointer" />
    </a>
  </li>
);
