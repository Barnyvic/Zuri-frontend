import "./Footer.css";
import { useEffect, useState } from "react";
import logonav from "../../../Components/Assets/svg/logo.svg";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { IoLogoTwitter } from "react-icons/io";
import { TiSocialLinkedin } from "react-icons/ti";

const Footer = () => {
  const [date, setDate] = useState();

  const getYear = () => setDate(new Date().getFullYear());

  useEffect(() => {
    getYear();
  }, []);
  return (
    <footer>
      <div className="footer-container container">
        <div className="footer1">
          <div className="nav-footer">
            <img src={logonav} alt="" />
          </div>
          <div className="footer-socials">
            <a href="/">
              <FaFacebookF />
            </a>

            <a href="/">
              <TiSocialLinkedin />
            </a>

            <a href="/">
              <IoLogoTwitter />
            </a>

            <a href="/">
              <AiOutlineYoutube />
            </a>
          </div>
        </div>

        <div className="footer2">
          <div className="date">
            <hr />
            <p>&copy; {date} Zuri Training</p>
          </div>
          <div className="copyright">
            <a href="/#">Privacy Policy</a>
            <a href="/#">Ingressive For Good</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
