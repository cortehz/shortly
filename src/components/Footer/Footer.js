import React from "react";
import "./footer.scss";
import facebook from "./icon-facebook.svg";
import instagram from "./icon-instagram.svg";
import pinterest from "./icon-pinterest.svg";
import twitter from "./icon-twitter.svg";

const Footer = () => {
  return (
    <footer>
      <a className="footer-brand" href="#home">
        Shortly
      </a>
      <ul>
        <li className="footer-links">
          Features
          <a href="#short">Links Shortening</a>
          <a href="#short">Branded Links</a>
          <a href="#short">Analytics</a>
        </li>
        <li className="footer-links">
          Resources
          <a href="http://dev.to/cortehz">Blog</a>
          <a href="http://github.com/cortehz" target="_blanck">
            Developers
          </a>
          <a href="https://paypal.me/cortehz">Support</a>
        </li>
        <li className="footer-links">
          Company
          <a href="https://samuelomanchi.me">About</a>
          <a href="https://samuelomanchi.me">Careers</a>
          <a href="mailto:omanchis@outlook.com">Contact</a>
        </li>

        <li className="footer-social-links">
          <a href="https://facebook.com/omanchis">
            <img src={facebook} alt="facebook icon" />
          </a>

          <a href="https://twitter.com/cortehz">
            <img src={twitter} alt="twitter-icon" />
          </a>
          <a href="https://instagram.com/cortehz">
            <img src={instagram} alt="instagram icon" />
          </a>
          <a href="https://github.com/cortehz">
            <img src={pinterest} alt="pinterest icon" />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
