import search from "../../../assets/icons/search.svg";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar  font-light mt-5 md:text-sm bg-white">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52"
          >
            <li>
              <Link className="" to="/">
                Who we are
              </Link>
            </li>
            <li>
              <Link className="" to="/">
                What we do
              </Link>
            </li>
            <li>
              <Link className="" to="/">
                Sustainability
              </Link>
            </li>
            <li>
              <Link className="" to="/">
                Partnering with us
              </Link>
            </li>
            <li>
              <Link className="" to="/about">
                About Us
              </Link>
            </li>
            <li>
              <Link className="" to="/contact">
                Conact Us
              </Link>
            </li>
          </ul>
        </div>
        <button className="btn ms-20 me-10 hidden md:block md:ms-0 rounded-none">
          <img src={search}></img>
        </button>
      </div>
      <div className="navbar hidden gap-9 lg:gap-7  font-light md:text-sm   lg:flex">
        <Link className="" to="/">
          Who we are
        </Link>
        <Link className="" to="/">
          What we do
        </Link>
        <Link className="" to="/">
          Sustainability
        </Link>
        <Link className="" to="/">
          Partnering with us
        </Link>

        <Link className="" to="/about">
          About Us
        </Link>
        <Link className="" to="/contact">
          Contact Us
        </Link>
      </div>
      <div className="navbar-end  me-9 ms-auto me-9">
        <Link to="/">Aimco</Link>
      </div>
    </div>
  );
}
