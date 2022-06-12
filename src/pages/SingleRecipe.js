import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import recipeData from "../data/MOCK_DATA.json";

const SingleRecipe = () => {
  const [allRecipeData, setAllRecipeData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    setAllRecipeData(recipeData);
  }, []);

  const Result = allRecipeData?.find((item) => item?.id == id);

  return (
    <div className="single-recipe-wrapper">
      <img src={Result?.image} alt="" />
      <p>{Result?.details}</p>
    </div>
  );
};

export default SingleRecipe;
