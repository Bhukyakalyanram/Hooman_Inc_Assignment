export default function Meals({ onAdd }) {
  return (
    <div className="bg-white p-4 rounded-2xl shadow mb-4 text-center">
      <h2 className="font-bold mb-2">Meals</h2>
      <button
        onClick={onAdd}
        className="bg-green-500 text-white px-3 py-1 rounded"
      >
        Add Meal
      </button>
    </div>
  );
}
