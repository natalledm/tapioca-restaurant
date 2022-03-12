import { Link } from 'react-router-dom';
import './typecard.css';

export default function TypeCard({ item }) {
  const { category, title, photo, description } = item;

  const photoImg = require(`../../assets/photos/${photo}`);

  return (
    <div className="typecard-container">
      <div className='typecard-image-container'>
        <img src={photoImg} alt={title} className="typecard-image" />
      </div>
      <div className='typecard-content-container'>
        <h2 className='typecard-title'>{title}</h2>
        <p className='typecard-description'>{description}</p>
        <p className='typecard-link'><Link to={`/${category}`}> > View more {title}</Link></p>
      </div>
    </div>
  )
}