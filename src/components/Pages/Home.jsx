import logo from '../../assets/images/tapioca-logo-desktop.png';
import background from '../../assets/images/bg-pattern.png';
import './home.css';

export default function Home() {
  return (
    <main className='home'>
      <section className='hero' style={{ backgroundImage: `url(${background})` }}>
        <img src={logo} alt="Tapioca Vegan Restaurant" className='hero-logo' />
      </section>
    </main>
  )
}