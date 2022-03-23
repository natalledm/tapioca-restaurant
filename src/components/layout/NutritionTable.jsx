import "./nutrition-table.css";

export default function NutritionTable({ nutrition }) {
  const { calories, carbohydrates, proteins, fats, fiber, sugars, sodium } =
    nutrition;

  // semantics -1
  // If the name is table, then why use a div instead of a table?
  return (
    <div className="nutri-table-container">
      <p>Calories: {calories}</p>
      <p>Carbohydrates: {carbohydrates}</p>
      <p>Proteins: {proteins}</p>
      <p>Fats: {fats}</p>
      <p>Fiber: {fiber}</p>
      <p>Sugars: {sugars}</p>
      <p>Sodium: {sodium}</p>
    </div>
  );
}
