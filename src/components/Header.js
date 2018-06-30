import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./../styles/Header.css";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <ul className="nav">
          <li>
            <Link to={"/"} className="nav-item">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to={"/"} className="nav-item">
              Mongo-NYT-Scraper
            </Link>
          </li>
          <li>
            <Link to={"/posts"} className="nav-item">
              Saved Posts
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}
