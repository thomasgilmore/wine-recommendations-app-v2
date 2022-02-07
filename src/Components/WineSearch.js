import React, { useState } from "react";
import WineRow from './WineRow';
import ImageRow from './ImageRow';
import './winesearch.css';
import Footer from './Footer';
import FooterWithData from './FooterWithData';

require('dotenv').config()

function WineSearch() {
  const [recommendationsImages, setRecommendationsImages] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const [form, setForm] = useState({
    foodOrWine: ""
  });

  async function recommendationsData(e) {
    e.preventDefault();
    if (form.foodOrWine === "") {
      alert("Add Wine or Food");
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
          const data2 = fetch(
            `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${encodeURIComponent(pairing)}&image_type=photo&pretty=true&category=food&safesearch=true`
          )
          .then((res2) => res2.json())
          .then((foodInfo) => {
            if (foodInfo.hits.length > 0) {
              let itemsFoodOrWine = foodInfo.hits;
              for (var i = 0; i < 1; i++) {
                let id = itemsFoodOrWine[i].id;
                if (!ids.includes(id)) {
                  let picture = itemsFoodOrWine[i].webformatURL;
                  const images = <ImageRow key={id} image={picture} />
                  imagesRows.push(images);
                  ids.push(id);
                }
              }
              setRecommendationsImages({ images: imagesRows })
            }
          })
        })
      })
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
    <div className="recommendation">
      <form>
        <input
          type="text"
          placeholder="Wine or Food"
          name="foodOrWine"
          onChange={(e) => handleChange(e)}
        />
        &nbsp; &nbsp; &nbsp;&nbsp;
        <button className="getrecommendation" onClick={(e) => recommendationsData(e)}>
          Search
        </button>
      </form>
    </div>

      <div className="recommendationContainer">
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
      {recommendations.data !== undefined ? (
        <FooterWithData /> ) : ( <Footer /> )}
    </div>
  );
}

export default WineSearch;