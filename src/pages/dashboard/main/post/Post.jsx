import React from "react";
import "./Post.css";

export const Post = () => {
  return (
    <li className="posts__item">
      <img className="user-logo" src="" alt="User Logo" />
      <div className="content-wrap">
        <div className="item__title">
          <div className="item__title-wrap">
            <h3 className="item__name"></h3>
            <p className="item__username">@</p>
            <span className="item__time"></span>
          </div>
          <div className="buttons-wrap">
            <button type="button" className="item__btn item__edit">
              Edit
            </button>
            <button type="button" className="item__btn item__delete">
              Delete
            </button>
          </div>
        </div>
        <p className="item__desc"></p>
        <div>
          <form>
            <input className="message__input" type="text" name="post" />
            <button type="submit" className="admin-main__post button__post">
              Update
            </button>
          </form>
        </div>
        <div className="message__image">
          <img src="" />
        </div>
        <div className="item__actions-wrap">
          <ul className="item-actions__list">
            <li className="item-actions__item">
              <i className="icon icon-chat icon-16"></i>
              <span className="count"></span>
            </li>
            <li className="item-actions__item">
              <i className="icon icon-share icon-16"></i>
              <span className="count"></span>
            </li>
            <li className="item-actions__item">
              <i className="icon icon-heart icon-16"></i>
              <span className="count"></span>
            </li>
            <li className="item-actions__item">
              <i className="icon icon-upload icon-16"></i>
            </li>
          </ul>
        </div>
      </div>
    </li>
  );
};
