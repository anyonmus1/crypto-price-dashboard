import { getCryptoPrices } from '../services/cryptoService';

interface CryptoCurrency {
  id: string; 
  name: string; 
  current_price: number; 
  symbol: string;
  image: string; 
}

export default async function Home() {
  // Fetch the crypto prices on the server and handle any potential errors
  let cryptos: CryptoCurrency[] = [];

  try {
    cryptos = await getCryptoPrices(); // Fetch the crypto prices
  } catch (error) {
    return <div>Error fetching data. Please try again later.</div>; // Error handling
  }

  // check if no data is retuened 
  if (cryptos.length === 0) {
    return <div>No data available</div>;
  }

  // Render the prices in the component
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-8">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-900 dark:text-gray-100">Top 10 Cryptocurrencies by Market Cap</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cryptos.map((crypto: CryptoCurrency, index: number) => (
          <li key={crypto.id} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex items-center space-x-4">
            <span className="text-2xl font-bold text-black dark:text-white">{index + 1}.</span>
            <img src={crypto.image} alt={crypto.name} className="w-12 h-12 rounded-full" />
            <div>
              <h2 className="text-lg font-bold text-black dark:text-white">{crypto.name} ({crypto.symbol.toUpperCase()})</h2>
              <p className="text-black dark:text-white font-semibold">${crypto.current_price.toLocaleString()}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
