import axios from 'axios';



export const getCountries = async (limitValue:Number) => {
  
const options = {
  method: 'GET',
  url: 'https://wft-geo-db.p.rapidapi.com/v1/geo/countries',
  params: {limit: limitValue},
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
    'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
  }
};
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    throw new Error(error as any);
  }
};
