import React, { useState } from "react";
import liveby from "../assests/liveby.jpg";

import Icon from "@material-ui/core/Icon";
import Pnews from "../assests/Pnews.png";
import Pnews1 from "../assests/Pnews1.png";
import Nav from "../components/Nav";
import Headline from "../assests/Headline.png";
import Input from "../components/Input";
const cat = [
    {
      id: 1,
      title: "Home",
    },
    {
      id: 2,
      title: "Write Post",
    },
    {
      id: 3,
      title: "News",
    },
    {
      id: 4,
      title: "Live",
    },
  ];


export default function EditorPanel() {
    return (
        <div className= "EditorPanel">
            <Nav/>
            <div className="PanelBody">
            <div className="sidebar">
          <p className="catHeading">Editor Panel</p>
          {cat.map(({ id, title }) => (
            <p className="cats" key={id}>
              {title}
            </p>
          ))}
        </div>
        <div className="LivebyYou">
            <p>Live By You</p>
            <img src={liveby} alt="Img" />
          <p>
            Chealse Have Won UCL barting ManCity By One-Nil
            <Icon style={{ fontSize: 20, color: "black" }}>visibility</Icon>
          </p>
          <Icon style={{ fontSize: 20, color: "black", float: "right" }}>
            thumbUp
          </Icon>
        </div>
        <div className="WritePost">
            <h1>Write Post</h1>
        <Input
          placeholder="Editor's Name"
          type="text"
          value={""}
          onChange={("")}
        />
        <h3>SelecCategories</h3>
         <form>
      <select value={" "}>
        <option value="Sports">Sports</option>
        <option value="Politics">Politics</option>
        <option value="Entertainent">Entertainment</option>
      </select>
      </form>
      <Input
          placeholder="Topic"
          type="text"
          value={""}
          onChange={("")}
        />
        <Input
          placeholder="Write Post"
          type="text"
          value={""}
          onChange={("")}
        />
        </div>
        </div>
        <div className="headlinesE">
          <p>Headlines</p>
          <img src={Headline} alt="Img" />
          <p>Is there hope for revived peace talks on Palestine, Israel?</p>

        </div>
        </div>
    );
}
