import logo from '../../assets/images/tapioca-logo-desktop.png';
import './home.css';

export default function Home() {
  return (
    <main className='home'>
      <section className='hero'>
        <img src={logo} alt="Tapioca Vegan Restaurant" className='hero-logo' />
      </section>
    </main>
  )
}