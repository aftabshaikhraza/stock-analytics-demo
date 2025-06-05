// pages/company/[ticker].tsx

import { GetServerSideProps } from 'next';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

interface CompanyData {
  profile: any[];
  quote: any[];
  income_statement: any[];
  price_history: { date: string; close: number }[];
}

export default function CompanyPage({ data }: { data: CompanyData }) {
  const company = data?.profile?.[0];
  const quote = data?.quote?.[0];
  const income = data?.income_statement?.[0];
  const priceHistory = data?.price_history;

  if (!company || !quote) {
    return <p className="text-white p-4">No data found for this ticker.</p>;
  }

  const chartData = {
    labels: priceHistory?.map((entry) => entry.date),
    datasets: [
      {
        label: 'Stock Price',
        data: priceHistory?.map((entry) => entry.close),
        borderColor: 'rgba(59,130,246,1)',
        backgroundColor: 'rgba(59,130,246,0.2)',
        tension: 0.4
      }
    ]
  };

  return (
    <main className="bg-gray-900 min-h-screen text-white p-6">
      <h1 className="text-3xl font-bold mb-4">
        {company.companyName} ({company.symbol})
      </h1>
      <p className="mb-4">{company.description}</p>

      <div className="mb-6">
        <p><strong>Sector:</strong> {company.sector}</p>
        <p><strong>CEO:</strong> {company.ceo}</p>
        <p><strong>Price:</strong> ${quote.price}</p>
        <p><strong>Market Cap:</strong> ${quote.marketCap?.toLocaleString()}</p>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Latest Income Statement</h2>
        <p><strong>Revenue:</strong> ${income?.revenue?.toLocaleString()}</p>
        <p><strong>Net Income:</strong> ${income?.netIncome?.toLocaleString()}</p>
        <p><strong>Date:</strong> {income?.date}</p>
      </div>

      {priceHistory && (
        <div>
          <h2 className="text-xl font-semibold mb-2">Price Chart (Last 10 Days)</h2>
          <Line data={chartData} />
        </div>
      )}
    </main>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { ticker } = context.params as { ticker: string };
  const res = await fetch(`http://localhost:8000/api/company/${ticker}`);
  const data = await res.json();

  return { props: { data } };
};