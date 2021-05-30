import React, { useState } from "react";
import Headline from "../assests/Headline.png";
import video1 from "../assests/video1.mp4";
import Icon from "@material-ui/core/Icon";
import Pnews from "../assests/Pnews.png";
import Pnews1 from "../assests/Pnews1.png";
import Nav from "../components/Nav";
const cat = [
  {
    id: 1,
    title: "Home",
  },
  {
    id: 2,
    title: "News",
  },
  {
    id: 3,
    title: "Articles",
  },
  {
    id: 4,
    title: "Categories",
  },
  {
    id: 4,
    title: "CComments",
  },

];
const Post = [
  {
    id: 1,
    title: " ",
  },
  {
    id: 2,
    title: " ",
  },
  {
    id: 3,
    title: " ",
  },
  {
    id: 4,
    title: "  ",
  },
];

export default function Dashboard() {
  const[name,setname] =useState("");
  const [opinon, setopinon] = useState("");
  return (
    <div className="dashboard">
      <Nav />
      <div className="dashboardBody">
        <div className="sidebar">
          <p className="catHeading">Home</p>
          {cat.map(({ id, title }) => (
            <p className="cats" key={id}>
              {title}
            </p>
          ))}
        </div>
        <div className="headlines">
          <p>Headlines</p>
          <img src={Headline} alt="Img" />
          <p>
            Is there hope for revived peace talks on Palestine, Israel?
            <Icon style={{ fontSize: 20, color: "black" }}>visibility</Icon>
          </p>
          <Icon style={{ fontSize: 20, color: "black", float: "right" }}>
            thumbUp
          </Icon>
        </div>
        <div className="livePosts">
          <div>
            <p>India-Pak Trade Isseus by "Saad "</p>
            <div className="buttonWrapper">
              <button className="editButton" onClick={""}>
                Edit
              </button>
              <button className="reportButton" onClick={""}>
                Reportt
              </button>
              <button className="deleteButton" onClick={""}>
                Delete
              </button>
            </div>
          </div>
          <div>
            <p>Isreal Attacked Gaza Tower By Missels by "Waqas"</p>
            <div className="buttonWrapper">
              <button className="editButton" onClick={""}>
                Edit
              </button>
              <button className="reportButton" onClick={""}>
                Report
              </button>
              <button className="deleteButton" onClick={""}>
                Delete
              </button>
            </div>
          </div>
          <div>
            <p>Chealse Claims Worlds Leadership " Wasiq"</p>
            <div className="buttonWrapper">
              <button className="editButton" onClick={""}>
                Edit
              </button>
              <button className="reportButton" onClick={""}>
                Reportt
              </button>
              <button className="editButton" onClick={""}>
                Delete
              </button>
            </div>
          </div>
          <div>
            <p>UN calls for Immidiate Solution For Israel-Gaza Matter</p>
            <div className="buttonWrapper">
              <button className="editButton" onClick={""}>
                Edit
              </button>
              <button className="reportButton" onClick={""}>
                Reportt
              </button>
              <button className="deleteButton" onClick={""}>
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="opinon">
            <h1>Opinons</h1>
           <href> <h4>
              Students are doing the hard work – governments should, too
"Bede Sheppard"
            </h4>
            <h4>
            Generation Z will free Palestine
"Haythem Guesmi"
            </h4>
            <h4>
              Students are doing the hard work – governments should, too
"Bede Sheppard"
            </h4>
            <h4>
              Students are doing the hard work – governments should, too
"Bede Sheppard"
            </h4>
            </href>
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
