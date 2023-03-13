import React from "react";
import { avatar, controller } from "../assets";
import { links } from "../data";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="user">
        <img src={avatar} alt="avatar" />
        <h3>Shaad Imran</h3>
        <p>Pro Member</p>
      </div>
      <div className="links">
        {links.map((link, index) => (
          <div className="link" key={index}>
            <img src={link.image} alt={link.title} />
            <h2>{link.title}</h2>
          </div>
        ))}
      </div>
      <div className="pro">
        <h2>Join pro for free games.</h2>
        <img src={controller} alt="controller" />
      </div>
    </div>
  );
};

export default Dashboard;
