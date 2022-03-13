import { useParams } from "react-router-dom";
import products from '../../data/products.json';
import NutritionTable from "./NutritionTable";

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
  const ingredientsListItem = ingredients.map(item => { return <li>{item}</li> });


  return (
    <section>
      <div className="meal-photo-container">
        <img src={photoURL} alt={name} className="meal-photo" />
      </div>
      <h1>{name}</h1>
      <p>{description}</p>
      <div>
        <h3>Ingredients</h3>
        <ul>
          <p>{ingredientsListItem}</p>
        </ul>
      </div>
      <div>
        <h3>Nutritional facts</h3>
        <NutritionTable nutrition={nutrition} />
      </div>
    </section>
  );
};