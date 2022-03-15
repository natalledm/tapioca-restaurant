import Navbar from "./components/layout/Navbar";
import Content from "./components/layout/Content";
import Footer from "./components/layout/Footer";
import "./App.css";

// Note, if you put your CCS directly under each component, you can do the same with the data.
export default function App() {
  // The contents of <Content/> should be here. Otherwise App.jsx does not do anything.
  return (
    <>
      <Navbar />
      <Content />
      <Footer />
    </>
  );
}
