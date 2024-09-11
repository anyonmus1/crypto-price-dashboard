import axios from 'axios';
//CoinGeckio API URL to fetch current data
const API_URL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1';
// returns found api data into a array
export const getCryptoPrices = async () => {
  const response = await axios.get(API_URL);
  return response.data; 
};
