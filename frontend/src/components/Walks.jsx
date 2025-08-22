export default function Walks({ onAdd }) {
  return (
    <div className="bg-white p-4 rounded-2xl shadow mb-4 text-center">
      <h2 className="font-bold mb-2">Walks</h2>
      <button
        onClick={() => onAdd(30)}
        className="bg-orange-500 text-white px-3 py-1 rounded"
      >
        Add 30 min Walk
      </button>
    </div>
  );
}
