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
      title: "Politics",
    },
    {
      id: 2,
      title: "National",
    },
    {
      id: 3,
      title: "International",
    },
    {
      id: 4,
      title: "Buisness",
    },
  ];

 
  
  export default function User() {
      return (
          <div className="UserView">
              <Nav/>
              <div className="dashboardBody">
        <div className="sidebar">
          <p className="catHeading">Home</p>
          {cat.map(({ id, title }) => (
            <p className="cats" key={id}>
              {title}
            </p>
          ))}
        </div>
        <div className="headlinesU">
          <p>Headlines</p>
          <img src={Headline} alt="Img" />
          <p>
            Is there hope for revived peace talks on Palestine, Israel?
            <Icon style={{ fontSize: 20, color: "black" }}>visibility</Icon>
          </p>
          </div>
          
          
          <div classanme="SignupF">
              <h3>Signup For Free</h3>
              <Input
          placeholder="Name"
          type="text"
          value={""}
          onChange={("")}
        />
         <Input
          placeholder="Email"
          type="text"
          value={""}
          onChange={("")}
        />
         <Input
          placeholder="Password"
          type="password"
          value={""}
          onChange={("")}
        />
          </div>
          </div>
          <div className="Political News">
          <h1>Politicical</h1>
          <img src={Pnews} />
          <p>Canadian Prime Minister Trudeau apologises for WWII internments</p>
          <img src={Pnews1} />
          <p>What’s behind Colombia’s month of mass protest?</p>
          <href>More</href>
        </div>
          </div>
      );
  }
  