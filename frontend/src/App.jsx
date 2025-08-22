import { useState, useEffect } from 'react';
import Walks from './components/Walks';
import Meals from './components/Meals';
import Meds from './components/Meds';
import Summary from './components/Summary';
import Chat from './components/Chat';

export default function App() {
  const [summary, setSummary] = useState({ totalWalk: 0, meals: 0, meds: 0 });
  const [petName, setPetName] = useState('Rex');

  const fetchSummary = async () => {
    if (!petName) return;
    const res = await fetch(
      `http://localhost:5000/api/summary?petName=${petName}`
    );
    const data = await res.json();
    setSummary(data);
  };
  useEffect(() => {
    fetchSummary();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addWalk = async (minutes) => {
    await fetch('http://localhost:5000/api/walks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ minutes, petName }),
    });
    fetchSummary();
  };

  const addMeal = async () => {
    await fetch('http://localhost:5000/api/meals', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ petName }),
    });
    fetchSummary();
  };

  const addMed = async () => {
    await fetch('http://localhost:5000/api/meds', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ petName }),
    });
    fetchSummary();
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">🐾 Pet Tracker</h1>
      <input
        type="text"
        value={petName}
        onChange={(e) => setPetName(e.target.value)}
        placeholder="Pet Name"
        className="border p-2 rounded mb-2 w-full"
      />
      <Walks onAdd={addWalk} />
      <Meals onAdd={addMeal} />
      <Meds onAdd={addMed} />
      <Summary summary={summary} petName={petName} />
      <Chat summary={summary} petName={petName} />
    </div>
  );
}
