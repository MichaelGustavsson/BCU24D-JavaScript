import { config } from '../config/config.js';

export const fetchData = async (
  endpoint: string,
  page: number = 1,
  filter?: string
): Promise<any> => {
  const API_URL = config.url.baseUrl;
  const API_KEY = config.api.key;

  let url = '';

  if (filter) {
    url = `${API_URL}/${endpoint}?query=${filter}&page=${page}&api_key=${API_KEY}`;
  } else {
    url = `${API_URL}/${endpoint}?page=${page}&api_key=${API_KEY}`;
  }

  try {
    const response = await fetch(url);

    if (response.ok) {
      return await response.json();
    } else {
      throw new Error(`${response.status} - ${url}`);
    }
  } catch (error: any) {
    throw new Error(error);
  }
};
