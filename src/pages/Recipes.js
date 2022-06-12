import { useEffect, useState } from "react";
import PreviousSearches from "../components/PreviousSearches";
import RecipeCard from "../components/RecipeCard";
import recipeData from "../data/MOCK_DATA.json";

function Recipes() {
  const [allRecipeData, setAllRecipeData] = useState(null);

  useEffect(() => {
    setAllRecipeData(recipeData);
  }, []);

  return (
    <div>
      <PreviousSearches />
      <div className="recipes-container">
        {/* <RecipeCard /> */}
        {allRecipeData?.map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}

export default Recipes;
