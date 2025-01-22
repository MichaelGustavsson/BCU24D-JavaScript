export const fetchData = async (endpoint: string) => {
  const key = 'c225640b9109317dc84c9f661f0ca0ba';
  const baseUrl = 'https://api.themoviedb.org/3';

  let url = '';

  if (endpoint.includes('?', 0)) {
    url = `${baseUrl}/${endpoint}&api_key=${key}`;
  } else {
    url = `${baseUrl}/${endpoint}?api_key=${key}`;
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
