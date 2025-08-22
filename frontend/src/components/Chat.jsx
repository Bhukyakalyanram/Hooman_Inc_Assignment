import { useState, useEffect } from 'react';

export default function Chat({ summary, petName }) {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  const fetchChats = async () => {
    const res = await fetch('http://localhost:5000/api/chats');
    const data = await res.json();
    setChatHistory(data);
  };

  useEffect(() => {
    fetchChats();
  }, []);

  const handleChat = async () => {
    if (!message) return;

    let reply = 'I’m not sure!';
    const text = message.toLowerCase();
    if (text.includes('walk'))
      reply = summary?.totalWalk
        ? `${petName} walked ${summary.totalWalk} mins`
        : `${petName} hasn’t walked yet.`;
    else if (text.includes('meal'))
      reply = `${petName} had ${summary?.meals || 0} meals today.`;
    else if (text.includes('med'))
      reply = `${petName} got ${summary?.meds || 0} meds today.`;

    await fetch('http://localhost:5000/api/chats', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user: message, bot: reply }),
    });

    setMessage('');
    fetchChats();
  };

  return (
    <div className="bg-white p-4 rounded-2xl shadow">
      <h2 className="font-bold mb-2">Chat</h2>
      <div className="h-32 overflow-y-auto border rounded mb-2 p-2">
        {chatHistory.map((c, i) => (
          <div key={i}>
            <p>
              <b>You:</b> {c.user}
            </p>
            <p>
              <b>Bot:</b> {c.bot}
            </p>
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="border p-2 flex-1 rounded"
          placeholder="Message..."
        />
        <button
          onClick={handleChat}
          className="bg-purple-500 text-white px-3 py-1 rounded"
        >
          Send
        </button>
      </div>
    </div>
  );
}
