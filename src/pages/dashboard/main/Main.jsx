import React from "react";
import "./Main.css";

import { Post } from "./post/Post";

export const Main = () => {
  return (
    <main className="main">
      <div className="main__title-wrap">
        <h1 className="main__title">Home</h1>
        <button className="main__logout" type="button">
          Log out
        </button>
      </div>
      <section className="main-message">
        <img className="user-logo" src="../../img/Barack.jpeg" alt="Photo" />
        <div className="main-message__actions-wrap">
          <form className="main-message__form" method="" action="">
            <textarea
              formControlName="inputArea"
              rows="1"
              className="main-message__input"
              type="text"
              name="post"
              placeholder="What's New?"
            ></textarea>
            <div className="main-message__image">
              <img src="" />
            </div>
            <div className="actions__wrap">
              <ul className="actions__list">
                <li className="actions__item">
                  <input id="file-input" type="file" accept="image/*" />
                  <label for="file-input">
                    <i className="icon icon-image"></i>
                  </label>
                </li>
                <li className="actions__item icon-16">
                  <i className="icon icon-gif"></i>
                </li>
                <li className="actions__item">
                  <i className="icon icon-badge-13"></i>
                </li>
                <li className="actions__item">
                  <i className="icon icon-ic_tag_faces_24px"></i>
                </li>
              </ul>
              <button type="submit" className="admin-main__post button__post">
                Post
              </button>
            </div>
          </form>
        </div>
      </section>
      <hr className="separate-line" />
      <section className="posts">
        <ul className="posts__list">
          <Post />
        </ul>
      </section>
    </main>
  );
};
