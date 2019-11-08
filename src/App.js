import React, { useEffect, useState } from "react";
import Recipe from "./recipe";

const App = () => {
  const APP_ID = "9819bf01";
  const APP_KEY = "90e71e7e3741b56831e6745ffb819844";

  //react hooks
  //creating state
  const [recipes, setRecipe] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  const exampleReq = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  useEffect(() => {
    getRecipe();
  }, [query]);

  const getRecipe = async () => {
    const response = await fetch(exampleReq);
    const data = await response.json();
    console.log(data.hits);
    setRecipe(data.hits);
  };

  const onChangeHandler = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
  };

  function clear()
  {
    document.querySelector(".search-bar").value = "";
  }
  return (
    <div className="App">
      <div className="call"></div>
      <div className="title">Food Recipe</div>
      <form className="search-form" onSubmit={getSearch}>
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={onChangeHandler}
          autoFocus  
          placeholder="enter a dish name"
        />
        <button className="search-button" type="submit">
          Submit
        </button>
      </form>
      <div className="recipes">
        {recipes.map(recipe => (
          <Recipe
            key={recipe.recipe.url}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
