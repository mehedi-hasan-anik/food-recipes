import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ChiefCard = ({ chief }) => {
  return (
    <div className="chief-card">
      <img src={chief.img} alt="" />
      <div className="chief-card-info">
        <h3 className="chief-card-name">{chief.name}</h3>
        <p className="chief-recipe-count">
          Recipes: <b>{chief.recipesCount}</b>
        </p>
        <p className="chief-cuisine">
          Cuisine: <b>{chief.cuisine}</b>
        </p>
        <ul className="cheif-icons">
          <li>
            <a href="https://www.facebook.com/" title="facebook">
              <FontAwesomeIcon icon={faFacebook} className="facebook" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/i/flow/login" title="twitter">
              <FontAwesomeIcon icon={faTwitter} className="twitter" />
            </a>
          </li>

          <li>
            <a
              href="https://www.instagram.com/accounts/login/"
              title="instagram"
            >
              <FontAwesomeIcon icon={faInstagram} className="instagram" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ChiefCard;
