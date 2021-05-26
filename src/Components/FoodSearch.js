import React, { useState } from "react";
import FoodRow from './FoodRow';
import WineRow from './WineRow';
import ImageRow from './ImageRow';
import "./newsearch.css";
// import { WeatherIcon } from './WeatherIcon';
// import moment from 'moment';
// import WeatherCard from './WeatherCard';

require('dotenv').config()

function FoodSearch() {
  const [recommendationsImages, setRecommendationsImages] = useState([]);
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

        let recommendationsTexts = [];
        let imagesRows = [];
        let ids = [];

        const foodOrWineRecommendationsText = <WineRow key={1} text={recommendationsText} />
        recommendationsTexts.push(foodOrWineRecommendationsText);

        setRecommendations({ data: recommendationsTexts })

        pairings.forEach((pairing) => {
          console.log(pairing)
          const data2 = fetch(
            // `https://api.unsplash.com/search/photos?query=${encodeURIComponent(pairing)}&client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`
            `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${encodeURIComponent(pairing)}&image_type=photo&pretty=true&category=food&safesearch=true`
            
            // `https://api.spoonacular.com/food/search?apiKey=${process.env.REACT_APP_API_KEY}&query=${pairing}`
            // `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${process.env.REACT_APP_API_KEY}&ingredients=${pairing}`
            // `https://api.spoonacular.com/food/menuItems/search?apiKey=${process.env.REACT_APP_API_KEY}&query=${pairing}`
            // `https://api.spoonacular.com/food/ingredients/search?apiKey=${process.env.REACT_APP_API_KEY}&query=${pairing}`
          )
          .then((res2) => res2.json())
          .then((foodInfo) => {
            // console.log(foodInfo);
            if (foodInfo.hits.length > 0) {
              // console.log(foodInfo);
              let itemsFoodOrWine = foodInfo.hits;
              console.log(itemsFoodOrWine);
              for (var i = 0; i < 1; i++) {
                let id = itemsFoodOrWine[i].id;
                if (!ids.includes(id)) {
                  let picture = itemsFoodOrWine[i].webformatURL;
                  console.log(picture);
                  const images = <ImageRow key={id} image={picture} />
                  imagesRows.push(images);
                  ids.push(id);
                } 
              }
              setRecommendationsImages({ images: imagesRows })
              console.log(imagesRows);
            }

            // console.log(foodInfo.results);
          //   if (foodInfo.results.length > 0) {
          //     console.log(foodInfo.results);
          //     let itemsFoodOrWine = foodInfo.results;

          //     for (var i = 0; i < 1; i++) {
          //       let id = itemsFoodOrWine[i].id;
          //       let picture = itemsFoodOrWine[i].urls.regular;
          //       console.log(picture);
          //       const images = <ImageRow key={id} image={picture} />
          //       imagesRows.push(images);
          //     }
          //     setRecommendationsImages({ images: imagesRows })
          //   }
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
          placeholder="Food"
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
      {recommendationsImages !== undefined ? (
        <div className="recommendationsImages">
          {recommendationsImages.images}
        </div>
      ) : null }
    </div>
  );
}

export default FoodSearch;