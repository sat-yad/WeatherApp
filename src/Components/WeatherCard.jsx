/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { useDate } from "../Utils/useDate";
import sun from "../assets/Icons/sun.png";
import cloud from "../assets/Icons/cloud.png";
import fog from "../assets/Icons/fog.png";
import rain from "../assets/Icons/rain.png";
import snow from "../assets/Icons/snow.png";
import storm from "../assets/Icons/storm.png";
import wind from "../assets/Icons/windy.png";
import "../index.css";

const WeatherCard = ({
  temperature,
  windspeed,
  humidity,
  place,
  heatIndex,
  iconString,
  conditions,
}) => {
  const [icon, setIcon] = useState(sun);
  const { time } = useDate();

  const handleWindSpeedClick = () => {
    setIsWindSpeedClicked(!isWindSpeedClicked);
  };

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
    <div className="w-[22rem] min-w-[22rem] h-[30rem] glassCard p-4 hover:scale-105 transition duration-300 ease-in-out hover:shadow-custom">
      <div className="flex w-full just-center, items-center gap-4 mt-12 mb-4">
        <img src={icon} alt="weather_icon" />
        <p className="font-bold text-5xl flex justify-center items-center weather-card-text ">
          <span className="hover:text-blue-500">{temperature} &deg;C</span>
        </p>
      </div>
      <div className="font-bold text-center text-xl ">
        <span className="hover:text-blue-500">{place}</span>
      </div>
      <div className="w-full flex justify-between items-center mt-4">
        <span className="flex-1 text-center p-2 hover:text-blue-500">
          {new Date().toDateString()}
        </span>
        <span className="flex-1 text-center p-2 hover:text-blue-500">
          {time}
        </span>
        {/* <p className="flex-1 text-center p-2 hover:text-blue-500">{time}</p> */}
      </div>
      <div className="w-full flex justify-between items-center mt-4 gap-4">
        <p className="flex-1 text-center p-2 font-bold bg-blue-600 shadow rounded-lg">
          Wind Speed <p className="font-normal ">{windspeed} km/h</p>
        </p>
        <p className="flex-1 text-center p-2 font-bold rounded-lg bg-orange-600">
          Humidity <p className="font-normal">{humidity} gm/m&#179;</p>
        </p>
      </div>
      <div className="w-full p-3 mt-4 flex justify-between items-center">
        <span className="font-semibold text-lg hover:text-blue-500">
          Heat Index
        </span>
        <span className="text-lg hover:text-blue-500">
          {heatIndex ? heatIndex : "N/A"}
        </span>
      </div>
      <hr className="bg-slate-600" />
      <div className="w-full p-4 flex justify-center items-center text-3xl font-semibold hover:text-blue-500">
        {conditions}
      </div>
    </div>
  );
};

export default WeatherCard;
