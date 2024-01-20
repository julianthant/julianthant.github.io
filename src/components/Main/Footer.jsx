import '../../styles/main.css';
import facebook from '../../assets/social-icons.svg#icon-facebook';
import instagram from '../../assets/social-icons.svg#icon-instagram';
import twitter from '../../assets/social-icons.svg#icon-twitter';
import linkedin from '../../assets/social-icons.svg#icon-linkedin';

export default function Footbar() {
  return (
    <footer className="footer | bg-primary-100 text-primary-400">
      <div className="footer--container | container">
        <ul className="footer--links" role="list" aria-label="social-links">
          <li>
            <a
              aria-label="facebook"
              href="https://facebook.com/julianhein.ais"
              target="_blank"
            >
              <svg className="footer--social-icons" style={{ width: '2.6em' }}>
                <use xlinkHref={facebook}></use>
              </svg>
            </a>
          </li>
          <li>
            <a
              aria-label="instagram"
              href="https://instagram.com/disis_julian?igshid=OGQ5ZDc2ODk2ZA=="
              target="_blank"
            >
              <svg className="footer--social-icons">
                <use xlinkHref={instagram}></use>
              </svg>
            </a>
          </li>
          <li>
            <a
              aria-label="twitter"
              href="https://www.twitter.com/soy_bala/"
              target="_blank"
            >
              <svg className="footer--social-icons" style={{ width: '2.6rem' }}>
                <use xlinkHref={twitter}></use>
              </svg>
            </a>
          </li>
          <li>
            <a
              aria-label="linkedin"
              href="https://www.linkedin.com/in/julian-hein-0a1504289/"
              target="_blank"
            >
              <svg className="footer--social-icons">
                <use xlinkHref={linkedin}></use>
              </svg>
            </a>
          </li>
        </ul>
        <p className="fs-300 fw-regular">
          Copyright &copy;2023 All rights reserved
        </p>
      </div>
    </footer>
  );
}
