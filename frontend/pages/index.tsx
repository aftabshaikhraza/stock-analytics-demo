import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const [ticker, setTicker] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (ticker.trim() !== '') {
      router.push(`/company/${ticker.toLowerCase()}`);
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-4">
      <h1 className="text-4xl font-bold mb-6">AI Stock Analytics</h1>
      <form onSubmit={handleSearch} className="w-full max-w-md">
        <input
          type="text"
          placeholder="Enter stock ticker (e.g., META)"
          value={ticker}
          onChange={(e) => setTicker(e.target.value)}
          className="w-full p-3 rounded-md bg-gray-800 text-white placeholder-gray-400 mb-4"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
        >
          Search
        </button>
      </form>
    </main>
  );
}