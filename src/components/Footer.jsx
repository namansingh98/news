import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FiInstagram } from "react-icons/fi";
import Styles from "./Footer.module.css";
const Footer = () => {
  // window.onload = displayClock();
  // function displayClock() {
  //   var display = new Date().toLocaleTimeString();
  //   document.body.innerHTML = display;
  //   setTimeout(displayClock, 1000);
  // }
  return (
    <>
      <footer>
        <div className={`${Styles.container} ${Styles.footer__container}`}>
          <article className={Styles.footer_font}>
            <h1>Ankur School</h1>
            <p>Admin Office : Sector - 1/c-185 , Near Shri Ram Mandir</p>
            <p>Bokaro Steel City (Jharkhand)</p>
            <p>Phone : 06542 - 245022, 7004117591</p>
            <div className={Styles.footer__socials}>
              <a
                href="https://linkedin.com/"
                target="__blank"
                rel="noreferrer noopener"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://facebook.com/"
                target="__blank"
                rel="noreferrer noopener"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com/"
                target="__blank"
                rel="noreferrer noopener"
              >
                <AiFillTwitterCircle />
              </a>
              <a
                href="https://instagram.com/"
                target="__blank"
                rel="noreferrer noopener"
              >
                <FiInstagram />
              </a>
            </div>
          </article>
          <article className={Styles.footer_font}>
            <h4 className={Styles.footer_link}>Permalinks</h4>
            <Link to="/about">About</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/query">Query</Link>
            <Link to="/admission">Admission</Link>
          </article>
          <article className={Styles.footer_font}>
            <h4 className={Styles.footer_link}>Insights</h4>
            <Link to="/s">Events</Link>
            <Link to="/s">Communities</Link>
            <Link to="/s">FAQ</Link>
          </article>
          <article className={Styles.footer_font}>
            <h4 className={Styles.footer_link}>Get In Touch</h4>
            <Link to="/contact">Contact Us</Link>
            <Link to="/query">Query</Link>
          </article>
        </div>
        <div className={Styles.footer__copyright}>
          <small>
            Ankur School {new Date().getFullYear()} &copy; All Right Reserved
          </small>
        </div>
      </footer>
    </>
  );
};

export default Footer;
