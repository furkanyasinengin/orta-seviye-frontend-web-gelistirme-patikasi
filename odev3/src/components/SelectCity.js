import React, { useEffect } from "react";
import { useCity } from "../Context/CityContext";
import axios from "axios";
const API_KEY = "API_KEY";

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
