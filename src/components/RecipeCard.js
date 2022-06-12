import { Link } from "react-router-dom";
import CustomImage from "./CustomImage";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="recipe-card">
      <CustomImage imgSrc={recipe.image} pt="65%" />
      <div className="recipe-card-info">
        <img className="auther-img" src={recipe.authorImg} alt="" />
        <p className="recipe-title">{recipe.title}</p>

        <p className="recipe-desc">
          {recipe?.details.length > 10
            ? recipe?.details.substring(0, 60) + "..."
            : recipe?.details}
        </p>
        <Link className="view-btn" to={`/recipe/${recipe?.id}`}>
          VIEW RECIPE
        </Link>
      </div>
    </div>
  );
};

export default RecipeCard;
