import { useState } from "react";

const Footer = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="footer container">
      <div className="footer-section">
        <p className="title">FoodiesHub.com</p>
        <p>
          FoodiesHub is a place where you can please your soul and tummy with
          delicious food recepies of all cuisine. And our service is absolutely
          free.
        </p>
        <p>&copy; {date?.getFullYear()} | All Rights Reserved</p>
      </div>
      <div className="footer-section">
        <p className="title">Contact Us</p>
        <p>anikm2283@gmail.com</p>
        <p>+8801959109322</p>
        <p>Dhaka, Bangladesh</p>
      </div>
      <div className="footer-section">
        <p className="title">Socials</p>
        <ul className="socila-media">
          <li>
            <a href="https://www.facebook.com/" title="facebook">
              Facebook
            </a>
          </li>
          <li>
            <a href="https://twitter.com/i/flow/login" title="twitter">
              Twitter
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/accounts/login/"
              title="instagram"
            >
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
