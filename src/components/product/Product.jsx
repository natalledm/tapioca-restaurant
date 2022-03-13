import { useParams } from "react-router-dom";
import products from '../../data/products.json';
import NutritionTable from "./NutritionTable";
import './product.css';

export default function Product(props) {

  const params = useParams();
  const { id } = params;

  const { category } = props;

  const categoryItems = products.filter(item => {
    return item.category === category;
  })[0].items;

  const meal = categoryItems.filter(item => {
    return item.id === +id;
  })[0];

  const { name, photo, description, ingredients, nutrition } = meal;

  const photoURL = require(`../../assets/photos/${photo}`);
  const ingredientsListItem = ingredients.map((item, index) => { return <li key={index}>{item}</li> });


  return (
    <section className="product-page-container">
      <div className="product-photo-container">
        <img src={photoURL} alt={name} className="product-photo" />
      </div>
      <h1 className="product-name">{name}</h1>
      <p className="product-description">{description}</p>
      <div>
        <h3>Ingredients</h3>
        <ul className="product-ingredients-list">
          <p>{ingredientsListItem}</p>
        </ul>
      </div>
      <div>
        <h3 className="product-nutrition-title">Nutritional facts</h3>
        <NutritionTable nutrition={nutrition} />
      </div>
    </section>
  );
};