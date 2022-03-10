import { Link } from "react-router-dom";

export default function Content() {
  return (
    <div>
      <h1>Pages</h1>
      <Link to="/home">Home</Link> |{" "}
      <Link to="/contact">Contact</Link>
    </div>
  );
}