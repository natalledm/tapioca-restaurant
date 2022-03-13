import { Outlet } from 'react-router-dom';
import products from '../../data/products.json';
import ProductCard from './ProductCard';
import './products-page.css';


export default function ProductsPage({ category }) {

  const product = products.filter(product => {
    return product.category === category;
  })[0]

  const { title, description } = product;


  const meals = product.items.map(item => {
    return <ProductCard item={item} key={item.id} />
  })


  return (
    <section className='products-page-container'>
      <div className='products-title-container bg-image'>
        <h1 className='products-title'>{title}</h1>
      </div>
      <div className='products-description'><p>{description}</p></div>
      {meals}
      <Outlet />
    </section>
  )
}