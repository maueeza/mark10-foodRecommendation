import { useState } from "react";
import "./styles.css";

const foodDictionary = {
  PunjabiFood: [
    { name: "Butter Chicken", rating: "4.5/5" },
    { name: "Murgh Patiala", rating: "4/5" },
    { name: "Sarso da Saag", rating: "3.5/5" }
  ],
  Mughlai: [
    { name: "Chicken Tikka", rating: "5/5" },
    { name: "Chicken Tandoori", rating: "4.5/5" },
    { name: "Mutton Kheema", rating: "4.2/5" }
  ],
  Maharashtrian: [
    { name: "Prawns Masala and Bhakari", rating: "5/5" },
    { name: "Sol Kadi", rating: "4.7/5" },
    { name: "Anda Bhurji and Chapati", rating: "4.5/5" }
  ]
};

var foodArray = Object.keys(foodDictionary);
//console.log(foodArray[0]);

export default function App() {
  const [selectedFoodType, setFoodType] = useState("PunjabiFood");
  function foodClickHandler(inpFood) {
    setFoodType(inpFood);
  }

  return (
    <div className="App">
      <h1>🥗 Food Recommedation</h1>
      <h2>
        {" "}
        Checkout some of the dishes I like. Select any category to check!👇
      </h2>

      {foodArray.map(function (food) {
        return (
          <span
            key={food}
            onClick={() => foodClickHandler(food)}
            className="food-type"
          >
            {food}
          </span>
        );
      })}
      <hr style={{ borderTop: "2px solid black", marginTop: "2rem" }}></hr>
      <div>
        <ul>
          {foodDictionary[selectedFoodType].map((currFood) => {
            return (
              <li
                style={{
                  listStyle: "none",
                  border: "1px solid #1e293b",
                  padding: "1rem",
                  borderRadius: "0.5rem",
                  marginTop: "1rem",
                  backgroundColor: "#f5f5f5",
                  textAlign: "justify",
                  width: "70%",
                  marginLeft: "auto",
                  marginRight: "auto"
                }}
                key={currFood.name}
              >
                <div style={{ fontSize: "larger" }}>{currFood.name}</div>
                <div style={{ marginTop: "0.5rem" }}>{currFood.rating}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
