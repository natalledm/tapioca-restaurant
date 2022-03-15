import { Link } from "react-router-dom";
import "./typecard.css";

export default function TypeCard({ reversed, item }) {
  const { category, title, photo, description } = item;

  // Properties
  const photoImg = require(`../../assets/photos/${photo}`);

  // if typecard-container is always used then use it like this
  return (
    <div className={`typecard-container ${reversed && typeCardClasses}`}>
      <div className="typecard-image-container">
        <img src={photoImg} alt={title} className="typecard-image" />
      </div>
      <div className="typecard-content-container">
        <h2 className="typecard-title">{title}</h2>
        <p className="typecard-description">{description}</p>
        <p className="typecard-link">
          <Link to={`/${category}`}> &gt; View more {title}</Link>
        </p>
      </div>
    </div>
  );
}
