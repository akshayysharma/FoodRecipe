import React from "react";
//import style from "./recipe.module.css";

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className="recipe">
      <h2 style={{ fontFamily: "Roboto" }}>{title}</h2>
      <ul>
        {ingredients.map(ingredient => (
          <li style={{ fontFamily: "Roboto", textAlign: "left" }}>
            {ingredient.text}
          </li>
        ))}
      </ul>
      <p>
        <b style={{ fontFamily: "Roboto" }}>Calories : {calories} grams</b>
      </p>
      <img className="image" src={image} alt="" />
    </div>
  );
};

export default Recipe;
