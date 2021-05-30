import React, { useState } from "react";
import Icon from "@material-ui/core/Icon";
export default function Dashboard() {
  const [active, setActive] = useState("home");

  return (
    <div className="nav">
      <p className="navLogo">The News</p>
      <div className="container">
        <div className="itemWrapper">
          <div
            className="navItem"
            style={{
              borderBottom: active === "home" ? "4px solid red" : "none",
            }}
            onClick={()=>{setActive('home')}}
          >
            <Icon style={{ fontSize: 30, marginRight:10, color:active==='home'?'red':'black' }}>home</Icon>
            <p>Home</p>
          </div>
          <div
            className="navItem"
            style={{
              borderBottom: active === "treading" ? "4px solid red" : "none",
            }}
            onClick={()=>{setActive('treading')}}
          >
            <Icon style={{ fontSize: 30, marginRight:10, color:active==='treading'?'red':'black' }}>whatshot</Icon>
            <p>Treading</p>
          </div>
          <div className="navItem"
            style={{
                borderBottom: active === "leaderboard" ? "4px solid red" : "none",
              }}
              onClick={()=>{setActive('leaderboard')}}
          >
            <Icon style={{ fontSize: 30, marginRight:10, color:active==='leaderboard'?'red':'black' }}>equalizer</Icon>
            <p>Leaderboard</p>
          </div>
        </div>
        <div className="iconWrapper">
          <div className="navIcon">
            <Icon style={{ fontSize: 30, color: "black" }}>notifications</Icon>
          </div>
          <div className="navIcon">
            <Icon style={{ fontSize: 30, color: "black"  }}>person</Icon>
          </div>
        </div>
      </div>
    </div>
  );
}
