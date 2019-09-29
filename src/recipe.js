import React from "react";
//title, calories, image
const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div>
      <h2>{title}</h2>
      {/* <ol>
        {ingredients.map(ingredient => (
          <li>ingredient</li>
        ))}
      </ol> */}
      <p>
        <b>{calories}</b>
      </p>
      <img src={image} alt="" />
    </div>
  );
};

export default Recipe;
