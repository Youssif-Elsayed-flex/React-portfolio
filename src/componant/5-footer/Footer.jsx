import React from "react";
import "./footer.css";
import { FaCopyright } from "react-icons/fa";

function Footer() {
  return (
    <footer className="flex">
      <ul className="flex">
        <li>
          <a href="#About">About</a>
        </li>
        <li>
          <a href="#Projects">Projects</a>
        </li>
        <li>
          <a href="#">Speaking</a>
        </li>
        <li>
          <a href="#">Users</a>
        </li>
      </ul>
      <p>
        <span>
          <FaCopyright />
        </span>
        2025 Youssif Elsayed. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
