import React from "react";
import "./Suggestions.css";
import { images } from "../../../assets/img/Img.js";

export const Suggestions = () => {
  return (
    <aside className="suggestions">
      <section className="suggestions__follow follow">
        <h2 className="follow__title">Who To Follow</h2>
        <ul className="follow__list">
          <li className="follow__item">
            <img className="follow__img" src={images.barak} alt="User" />
            <div className="follow__names-wrap">
              <h3 className="follow__name">Barack obama</h3>
              <p className="follow__username">@BarackObama</p>
            </div>
            <button className="follow__btn" href="#">
              Follow
            </button>
          </li>
          <li className="follow__item">
            <img className="follow__img" src={"images.barak"} alt="User" />
            <div className="follow__names-wrap">
              <h3 className="follow__name">Shchetyna Vladyslav</h3>
              <p className="follow__username">@ShchVl</p>
            </div>
            <button className="follow__btn" href="#">
              Follow
            </button>
          </li>
          <li className="follow__item">
            <img className="follow__img" src={images.nix} alt="User" />
            <div className="follow__names-wrap">
              <h3 className="follow__name">Nix solutions</h3>
              <p className="follow__username">@nix</p>
            </div>
            <button className="follow__btn" href="#">
              Follow
            </button>
          </li>
        </ul>
        <a className="follow__link">Show more</a>
      </section>
    </aside>
  );
};
