import axios from 'axios';

export const getCountries = async (limit: number, offset: number) => {
  const options = {
    method: 'GET',
    url: 'https://wft-geo-db.p.rapidapi.com/v1/geo/countries',
    params: { limit, offset },
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

export const getCountry = async (countryCode: string) => {
  const options = {
    method: 'GET',
    url: `https://wft-geo-db.p.rapidapi.com/v1/geo/countries/${countryCode}`,
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