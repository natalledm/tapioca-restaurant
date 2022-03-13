import { Routes, Route, Navigate } from "react-router-dom";
import Contact from "../Pages/Contact";
import Home from "../Pages/Home";
import Product from "../product/Product";
import ProductsPage from "../product/ProductsPage";

export default function Content() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/*" element={<Navigate replace to="/" />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/dishes" element={<ProductsPage category="dishes" />}>
        <Route path=":id" element={<Product category="dishes" />} />
      </Route>
      <Route path="/desserts" element={<ProductsPage category="desserts" />}>
        <Route path=":id" element={<Product category="desserts" />} />
      </Route>
      <Route path="/drinks" element={<ProductsPage category="drinks" />}>
        <Route path=":id" element={<Product category="drinks" />} />
      </Route>
    </Routes>
  );
}