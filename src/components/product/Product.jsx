import { Link, useParams } from "react-router-dom";
import products from "../../data/products.json";
import NutritionTable from "./NutritionTable";
import "./product.css";

// This part from line 7 to 26 (before writting the comments look so meesy, check the refactor to compare)
export default function Product(props) {
  const params = useParams();
  const { id } = params;
  const { category } = props;

  // Why the double filtering?
  const categoryItems = products.filter((item) => {
    return item.category === category;
  })[0].items;
  const meal = categoryItems.filter((item) => {
    return item.id === +id;
  })[0];
  const { name, photo, description, ingredients, nutrition } = meal;

  // Properties
  const photoURL = require(`../../assets/photos/${photo}`);

  // Components
  const Ingredients = ingredients.map((item, index) => {
    return <li key={index}>{item}</li>;
  });

  return (
    <section className="product-page-container">
      {/* Header */}
      <div className="product-photo-container">
        <img src={photoURL} alt={name} className="product-photo" />
      </div>
      <h1 className="product-name">{name}</h1>
      <p className="product-description">{description}</p>

      {/* This is a section */}
      <div>
        <h3>Ingredients</h3>
        <ul className="product-ingredients-list">{Ingredients}</ul>
      </div>

      {/* Another section */}
      <div>
        <h3 className="product-nutrition-title">Nutritional facts</h3>
        <NutritionTable nutrition={nutrition} />
      </div>

      {/* Footer perhabs? */}
      <button className="product-button-go-back">
        {/* Semantics -1 p is for paragraphs, i.e long pieces of text, you can write the name directly */}
        <p>
          {/* Semantics -1 if is a link the is not a button so juse use the Link directly  */}
          <Link to={`/${category}`}>Go back</Link>
        </p>
      </button>
    </section>
  );
}
