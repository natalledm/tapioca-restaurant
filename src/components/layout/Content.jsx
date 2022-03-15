import { Routes, Route, Navigate } from "react-router-dom";
import Contact from "../Pages/Contact";
import Home from "../Pages/Home";
import Product from "../product/Product";
import ProductsPage from "../product/ProductsPage";

export default function Content() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      {/* DRY (repetition) -1 You have dishes, desserts and drinks hardcoded */}
      {/* It should be "category" as a variable and then the menu item as a variable as well */}
      <Route path="/contact" element={<Contact />} />
      <Route path="/dishes" element={<ProductsPage category="dishes" />} />
      <Route path="/dishes/:id" element={<Product category="dishes" />} />
      <Route path="/desserts" element={<ProductsPage category="desserts" />} />
      <Route path="/desserts/:id" element={<Product category="desserts" />} />
      <Route path="/drinks" element={<ProductsPage category="drinks" />} />
      <Route path="/drinks/:id" element={<Product category="drinks" />} />
      <Route path="/*" element={<Navigate replace to="/" />} />
    </Routes>
  );
}
