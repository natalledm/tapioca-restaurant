import products from '../../data/products.json';
import { Link, Outlet } from 'react-router-dom';



export default function ProductsPage({ category }) {

  const product = products.filter(product => {
    return product.category === category;
  })[0]





  return (
    <div>
      {category} {JSON.stringify(product, null, 4)}

      {product.items.map(item => {
        return <Link to={`/${category}/${item.id}`}>{item.name}</Link>
      })}

      <Outlet />
    </div>
  )
}