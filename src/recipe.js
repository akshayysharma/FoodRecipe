import React from "react";
//import style from "./recipe.module.css";
//title, calories, image
const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className="recipe">
      <h2>{title}</h2>
      {/* <ol>
        {ingredients.map(ingredient => (
          <li>ingredient</li>
        ))}
      </ol> */}
      <p>
        <b>{calories}</b>
      </p>
      <img className="image" src={image} alt="" />
    </div>
  );
};

export default Recipe;
