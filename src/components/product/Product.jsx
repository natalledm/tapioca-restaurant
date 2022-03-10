import { useParams } from "react-router-dom";
import products from '../../data/products.json';

export default function Product(props) {

  const params = useParams();
  const { id } = params;

  const { category } = props;

  const categoryItems = products.filter(item => {
    return item.category === category;
  })[0].items;

  const entry = categoryItems.filter(item => {
    return item.id === +id;
  })[0];

  return (
    <>
      <h1>{category} {id}</h1>
      <h2>{JSON.stringify(entry, null, 4)}</h2>
      <h3>{JSON.stringify(categoryItems, null, 4)}</h3>
    </>
  );
};