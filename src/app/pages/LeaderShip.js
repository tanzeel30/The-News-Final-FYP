import React, { useState } from "react";
import liveby from "../assests/liveby.jpg";
import video1 from "../assests/video1.mp4";
import Icon from "@material-ui/core/Icon";
import Pnews from "../assests/Pnews.png";
import Editorprofile from "../assests/Editorprofile.png";
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


export default function LeaderShip() {
    return (
        <div className= "Leadership">
        <Nav/>
        <div className="LeaderBody">
        <div className="sidebar">
      <p className="catHeading">Categories</p>
      {cat.map(({ id, title }) => (
        <p className="cats" key={id}>
          {title}
        </p>
      ))}
    </div>  
    <div className="Leaders">
        <h1>Tanzeel #1
        <img src={Editorprofile } atl="img"/>
        </h1>
        
        <p>He is Best Editor of our news channel is has 97% audiance approval
        </p>
        <h1>Saad #2
        <img src={Editorprofile } atl="img"/>
        </h1>
       
        <p>He is Best Editor of our news channel is has 97% audiance approval
        </p>
        <h1>Anny #3
        <img src={Editorprofile } atl="img"/>
        </h1>
        <p>He is Best Editor of our news channel is has 97% audiance approval
        </p>
    </div>
    </div>
</div>
    );
}
