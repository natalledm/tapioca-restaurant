import { Link } from "react-router-dom";
import "./product-card.css";

export default function ProductCard({ item }) {
  const { photo, name, description, category, id } = item;

  const photoImg = require(`../../assets/photos/${photo}`);

  return (
    <div className="meal-card-container">
      <div className="meal-photo-container">
        <img src={photoImg} alt={name} className="meal-photo" />
      </div>
      <div className="meal-content">
        <h3 className="meal-title">{name}</h3>
        <p className="meal-description">{description}</p>
        {/* no need for the p, use the Link directly */}
        <p className="meal-link">
          <Link to={`/${category}/${id}`}> &gt; View details of {name}</Link>
        </p>
      </div>
    </div>
  );
}
