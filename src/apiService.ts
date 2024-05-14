import axios, { AxiosResponse } from 'axios';

// Define the type of the API response
interface Country {
    code: string;
    currencyCodes: string[];
    name: string;
    wikiDataId: string;
  }
  
  interface Link {
    rel: string;
    href: string;
  }
  
  interface Metadata {
    currentOffset: number;
    totalCount: number;
  }
  
  interface ApiResponse {
    data: Country[];
    links: Link[];
    metadata: Metadata;
  }
  

const options = {
  method: 'GET',
  url: 'https://wft-geo-db.p.rapidapi.com/v1/geo/countries',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
    'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
  }
};

export const getCountries = async (): Promise<ApiResponse> => {
  try {
    const response: AxiosResponse<ApiResponse> = await axios.request(options);
    return response.data;
  } catch (error) {
    // Rapid APi limits: You have exceeded the rate limit per second for your plan, BASIC, by the API provider.
    // @ts-ignore
    if (error.response.status === 429) {
      await new Promise(resolve => setTimeout(resolve, 120000)); // 2 minutes
      return getCountries(); // Retry the request
    } else {
      throw new Error(error as any);
    }
  }
};
