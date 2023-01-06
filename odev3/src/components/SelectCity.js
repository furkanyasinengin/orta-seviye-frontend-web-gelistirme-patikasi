import React, { useEffect } from "react";
import { useCity } from "../Context/CityContext";
import axios from "axios";
const API_KEY = "6fbb27a80c3c6c6beb57cd70c68a4f3b";

function SelectCity() {
  const { city, setCity, citys } = useCity();

  return (
    <div>
      <h2>
        <label htmlFor="citys">Choose a city:</label>
      </h2>

      <h2>
        <select
          onChange={(e) => setCity(e.target.value)}
          name="city"
          id="city"
          defaultValue={"Istanbul"}
        >
          {citys.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
      </h2>
    </div>
  );
}

export default SelectCity;
