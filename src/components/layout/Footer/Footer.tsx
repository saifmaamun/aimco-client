import fb from "../../../assets/icons/facebook.png";
import tw from "../../../assets/icons/twitter.png";
import ln from "../../../assets/icons/linkedin.png";
import yt from "../../../assets/icons/youtube.png";
import ns from "../../../assets/icons/instagram.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer p-10 text-xs lg:text-base font-light  md:flex-auto   bg-base-200 text-base-content">
      <div>
        <p className="footer-title border-b-2">Site information</p>
        <a className="link link-hover">COOKIE NOTICES</a>
        <a className="link link-hover">PRIVACY STATEMENT</a>
        <a className="link link-hover">TERMS AND CONDITIONS</a>
        <a className="link link-hover">SCAM AND FRAUD ALERT</a>
        <br />

        <a className="link link-hover">SITEMAP</a>
      </div>

      <div>
        <span className="footer-title border-b-2">News & Media</span>
        <a className="link link-hover">SEARCH ALL NEWS</a>
        <a className="link link-hover">LATEST NEWS</a>
        <a className="link link-hover">PUBLICATIONS</a>
        <a className="link link-hover">SPEECHES</a>
        <a className="link link-hover">MEDIA GALLERY</a>
        <br />
        <a className="link link-hover">CONTACTS AND RESOURCES </a>
      </div>

      <div>
        <span className="footer-title border-b-2">Other websites</span>
        <a className="link link-hover">WA’ED VENTURES</a>
        <a className="link link-hover">AEIMCO TRADING COMPANY</a>
        <a className="link link-hover">IKTVA</a>
        <a className="link link-hover">AEIMCO VENTURES</a>
        <a className="link link-hover">CITIZENSHIP</a>
      </div>

      <div>
        <span className="footer-title border-b-2">Social media</span>
        <div className="flex gap-5 justify-center justify-items-center">
          <Link to="/">
            <img className="" src={fb} alt="" />
          </Link>
          <Link to="/">
            <img className="" src={tw} alt="" />
          </Link>
          <Link to="/">
            <img className="" src={ln} alt="" />
          </Link>
          <Link to="/">
            <img className="" src={yt} alt="" />
          </Link>
          <Link to="/">
            <img className="" src={ns} alt="" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
