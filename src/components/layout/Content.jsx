import { Link, Routes, Route } from "react-router-dom";
import Contact from "../Pages/Contact";
import Home from "../Pages/Home";
import ProductsPage from "../product/ProductsPage";

export default function Content() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/contact" element={<Contact />} />
      <Route path="/dishes" element={<ProductsPage category="dishes" />} />
      <Route path="/desserts" element={<ProductsPage category="desserts" />} />
      <Route path="/drinks" element={<ProductsPage category="drinks" />} />
    </Routes>
  );
}