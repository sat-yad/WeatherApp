/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";

// import { Link } from "react-router-dom";

import sun from "../assets/Icons/sun.png";
import cloud from "../assets/Icons/cloud.png";
import fog from "../assets/Icons/fog.png";
import rain from "../assets/Icons/rain.png";
import snow from "../assets/Icons/snow.png";
import storm from "../assets/Icons/storm.png";
import wind from "../assets/Icons/windy.png";

const MiniCard = ({ time, temp, iconString }) => {
  const [icon, setIcon] = useState();

  useEffect(() => {
    if (iconString) {
      if (iconString.toLowerCase().includes("cloud")) {
        setIcon(cloud);
      } else if (iconString.toLowerCase().includes("rain")) {
        setIcon(rain);
      } else if (iconString.toLowerCase().includes("clear")) {
        setIcon(sun);
      } else if (iconString.toLowerCase().includes("thunder")) {
        setIcon(storm);
      } else if (iconString.toLowerCase().includes("fog")) {
        setIcon(fog);
      } else if (iconString.toLowerCase().includes("snow")) {
        setIcon(snow);
      } else if (iconString.toLowerCase().includes("wind")) {
        setIcon(wind);
      }
    }
  }, [iconString]);
  return (
    <div className="glassCard w-[10rem] h-[10rem] p-4 flex flex-col hover:scale-105 transform transition duration-300 ease-in-out">
      <p className="text-center">
        {
          new Date(time)
            .toLocaleTimeString("en", { weekday: "long" })
            .split(" ")[0]
        }
      </p>
      <hr />
      <div className="w-full flex justify-center items-center flex-1">
        <img
          src={icon}
          alt="forecast not available"
          className="w-[4rem] h-[4rem]"
        />
      </div>
      <p className="text-center font-bold">{temp}&deg;C</p>
    </div>
  );
};

export default MiniCard;
