import React, { useState } from "react";
import FoodRow from './FoodRow';
import WineRow from './WineRow';
import "./newsearch.css";
// import { WeatherIcon } from './WeatherIcon';
// import moment from 'moment';
// import WeatherCard from './WeatherCard';

require('dotenv').config()

function NewSearch() {
  const [recommendations, setRecommendations] = useState([]);
  const [form, setForm] = useState({
    foodOrWine: ""
  });

  async function recommendationsData(e) {
    e.preventDefault();
    if (form.foodOrWine === "") {
      alert("Add values");
    } else {
      const data = await fetch(
        `https://api.spoonacular.com/food/wine/dishes?apiKey=${process.env.REACT_APP_API_KEY}&wine=${form.foodOrWine}`
      )
      .then((res) => res.json())
      .then((foodOrWine) => {
        console.log(foodOrWine);
        const recommendationsText = foodOrWine.text;
        const pairings = foodOrWine.pairings;

        let recommendationsTexts = []

        const foodOrWineRecommendationsText = <WineRow key={1} text={recommendationsText} />
        recommendationsTexts.push(foodOrWineRecommendationsText);

        setRecommendations({ data: recommendationsTexts })

        pairings.forEach((pairing) => {
          const data2 = fetch(
            `https://api.spoonacular.com/food/ingredients/search?apiKey=${process.env.REACT_APP_API_KEY}&query=${pairing}`
          )
          .then((res2) => res2.json())
          .then((foodInfo) => {
            console.log(foodInfo);
          })
        })

        

        // const latitude = location.features[0].center[1];
        // const longitude = location.features[0].center[0];
        // const data2 = fetch(
        //   `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_API_KEY_OPEN_WEATHER_MAP}&units=imperial`
        // )
        // .then((res2) => res2.json())
        // .then((weatherData) => {
        //   const days = weatherData.daily;
          
        //   let weatherCards = []

        //   days.forEach(day => {
        //     const time = day.dt * 1000;
        //     const dayOfWeek = moment(time).format('dddd');
        //     const temp = Math.floor(day.temp.day);
        //     const rain = `${Math.floor(day.pop * 100)}%`;
        //     const weatherId = day.weather[0].id;
        //     const weatherIcon = day.weather[0].icon;
        //     const weatherImage = WeatherIcon(weatherId, weatherIcon);

        //     const weatherCard = <WeatherCard key={time} weekDay={dayOfWeek} tempeture={temp} raining={rain} image={weatherImage} />
        //     weatherCards.push(weatherCard)

        //   });

        //   setRecommendations({ data: weatherCards })
        // })
        // console.log(data2);
      })
    //   console.log(data);
    }
  }

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "foodOrWine") {
      setForm({ ...form, foodOrWine: value });
    }
  };
  return (
    <div>
    <div className="weather">
      <form>
        <input
          type="text"
          placeholder="Wine or Food"
          name="foodOrWine"
          onChange={(e) => handleChange(e)}
        />
        &nbsp; &nbsp; &nbsp;&nbsp;
        <button className="getweather" onClick={(e) => recommendationsData(e)}>
          Search
        </button>
      </form>
    </div>
     
      <div className="weatherCardContainer">
        {recommendations.data !== undefined ? (
          <div>
            {recommendations.data}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default NewSearch;