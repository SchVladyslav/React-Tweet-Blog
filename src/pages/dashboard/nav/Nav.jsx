import React from "react";
import "./Nav.css";

export const Nav = () => {
  return (
    <aside className="aside-nav">
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <a className="nav__link">
              <i className="icon icon-home-52"></i>
              Home
            </a>
          </li>
          <li className="nav__item">
            <a className="nav__link">
              <i className="icon icon-zoom-2"></i>
              Explore
            </a>
          </li>
          <li className="nav__item">
            <a className="nav__link">
              <i className="icon icon-bell-53"></i>
              Notifications
            </a>
          </li>
          <li className="nav__item">
            <a className="nav__link">
              <i className="icon icon-email-84"></i>
              Messages
            </a>
          </li>
          <li className="nav__item">
            <a className="nav__link">
              <i className="icon icon-bookmark-2"></i>
              Bookmarks
            </a>
          </li>
          <li className="nav__item">
            <a className="nav__link">
              <i className="icon icon-ic_filter_list_24px"></i>
              Lists
            </a>
          </li>
          <li className="nav__item">
            <a className="nav__link">
              <i className="icon icon-single-01"></i>
              Profile
            </a>
          </li>
        </ul>
        <button type="button" className="nav__btn-post button__post">
          Post
        </button>
      </nav>
    </aside>
  );
};
