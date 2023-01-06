import React, { useEffect, useState } from "react";
import { useCity } from "../Context/CityContext";
const API_KEY = "6fbb27a80c3c6c6beb57cd70c68a4f3b";

function WeatherCity() {
  const { city } = useCity();

  const [data, setData] = useState([]);

  const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  useEffect(() => {
    fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${API_KEY}`
    )
      .then((resCity) => resCity.json())
      .then((dataCity) => {
        fetch(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${dataCity[0].lat}&lon=${dataCity[0].lon}&appid=${API_KEY}`
        )
          .then((resWeather) => resWeather.json())
          .then((dataWeather) => {
            setData(dataWeather.list.filter((item, index) => index % 8 === 0));
          });
      });
  }, [city]);

  const weekofDay = (date) => {
    const day = new Date(date);
    return weekday[day.getDay()];
  };

  return (
    <div>
      <ul className="days">
        {data.map((item, index) => (
          <li
            key={index}
            style={
              index === 0
                ? {
                    backgroundColor: "rgba(137, 137, 137, 0.1)",
                    border: "solid 1px",
                    borderRadius: 15,
                    paddingRight: 40,
                  }
                : null
            }
          >
            <ul>
              <li>
                <h4>
                  {weekofDay(item.dt_txt.slice(0, item.dt_txt.search(" ")))}
                </h4>
              </li>

              <li>{item.weather[0].main}</li>
              <li>
                <img
                  src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                />
              </li>
              <li>
                <h5>
                  <span>{`${(item.main.temp_max - 273).toFixed(0)}°C `}</span>
                  <span style={{ color: "gray", fontSize: 13 }}>{`${(
                    item.main.temp_min - 273
                  ).toFixed(0)}°C`}</span>
                </h5>
              </li>
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WeatherCity;
