import "./App.css";
import SelectCity from "./components/SelectCity";
import WeatherCity from "./components/WeatherCity";
import { useCity, CityProvider } from "./Context/CityContext";

function App() {
  return (
    <div className="App">
      <CityProvider>
        <SelectCity />
        <WeatherCity />
      </CityProvider>
    </div>
  );
}

export default App;
