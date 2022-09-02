import React from "react";
import { Link } from "react-router-dom";
import img1 from "./img1/22.jpg";
import img2 from "../../img/2.jpg";
import img3 from "./img1/3.jpeg";
import Header from "../shared/Header";
import Timer from "./Timer";
import ChangeName from "./ChangeName";
const News = () => {
  console.log(img2);
  return (
    <>
      <div className="container">
        <div className="left part">
          <img src={img1} className="img1" />
          <div className="text">
            <Header
              title="News"
              text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga quod, enim maxime quas, provident nostrum praesentium obcaecati optio sunt nemo quae facere dolorum dignissimos nam perspiciatis adipisci distinctio? Neque, illum! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga quod, enim maxime quas, provident nostrum praesentium obcaecati optio sunt nemo quae facere dolorum dignissimos nam perspiciatis adipisci distinctio? Neque, illum!"
            />
          </div>
        </div>
        <div className="center part">
          <img src={img2} className="img2" />
          <div className="text">
            <Header
              title="News"
              text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga quod, enim maxime quas, provident nostrum praesentium obcaecati optio sunt nemo quae facere dolorum dignissimos nam perspiciatis adipisci distinctio? Neque, illum! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga quod, enim maxime quas, provident nostrum praesentium obcaecati optio sunt nemo quae facere dolorum dignissimos nam perspiciatis adipisci distinctio? Neque, illum!"
            />
          </div>
        </div>

        <div className="right part">
          <img src={img3} className="img3" />
          <div className="text">
            <Header
              title="News"
              text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga quod, enim maxime quas, provident nostrum praesentium obcaecati optio sunt nemo quae facere dolorum dignissimos nam perspiciatis adipisci distinctio? Neque, illum! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga quod, enim maxime quas, provident nostrum praesentium obcaecati optio sunt nemo quae facere dolorum dignissimos nam perspiciatis adipisci distinctio? Neque, illum!"
            />
          </div>
        </div>
      </div>
      <Timer frosina={3} />
      <ChangeName />
    </>
  );
};

export default News;
