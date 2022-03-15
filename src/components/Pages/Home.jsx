import logo from "../../assets/images/tapioca-logo-desktop.png";
import TypeCard from "../product/TypeCard";
import products from "../../data/products.json";
import "./home.css";

// Good
export default function Home() {
  const productsType = products.map((item, index) => {
    return <TypeCard key={index} item={item} reversed={index % 2 === 1} />;
  });

  return (
    <main className="home">
      {/* Semantics -1, this is the <header> tag, remember the newspaper analogy */}
      <section className="hero bg-image">
        <img src={logo} alt="Tapioca Vegan Restaurant" className="hero-logo" />
      </section>
      <section>{productsType}</section>
    </main>
  );
}
