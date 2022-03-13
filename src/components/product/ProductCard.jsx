import { Link } from 'react-router-dom';
import './product-card.css';

export default function ProductCard({ item }) {
  const { photo, name, description, category, id } = item;

  const photoImg = require(`../../assets/photos/${photo}`);

  return (
    <div>
      <div className="meal-photo-container">
        <img src={photoImg} alt={name} className="meal-photo" />
      </div>
      <div className='meal-content'>
        <h2 className='meal-title'>{name}</h2>
        <p className='meal-description'>{description}</p>
        <p className='meal-link'><Link to={`/${category}/${id}`}> &gt; View details of {name}</Link></p>
      </div>
    </div>
  )
}