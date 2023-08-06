import search from "../../../assets/icons/search.svg";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar mt-5 bg-white">
      <div className="">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <button className="btn ms-20 me-10 rounded-none">
          <img src={search}></img>
        </button>
      </div>
      <div className="navbar hidden gap-9  lg:flex">
        <Link to="/"> Who we are</Link>
        <Link to="/"> What we do</Link>
        <Link to="/"> Sustainability</Link>
        <Link to="/"> Partnering with us</Link>
        <Link to="/"> Investors</Link>
        <Link to="/"> Careers</Link>
        <Link to="/about"> About</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className="navbar-end me-9">
        <Link to="/">Aimco</Link>
      </div>
    </div>
  );
}
