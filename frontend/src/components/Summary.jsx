import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';

export default function Summary({ summary, petName }) {
  if (!summary) return null;
  return (
    <div className="bg-white p-4 rounded-2xl shadow mb-4 text-center">
      <h2 className="font-bold mb-2">
        Summary for {summary.petName || petName}
      </h2>
      <p>🚶 Walk: {summary.totalWalk} mins</p>
      <p>🍖 Meals: {summary.meals}</p>
      <p>💊 Meds: {summary.meds}</p>

      <div className="h-40 mt-4">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={[
              { name: 'Walk', value: summary.totalWalk },
              { name: 'Meals', value: summary.meals },
              { name: 'Meds', value: summary.meds },
            ]}
          >
            <XAxis dataKey="name" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Bar dataKey="value" fill="#f97316" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
