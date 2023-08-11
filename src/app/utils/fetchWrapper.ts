export const BASE_URL = 'http://localhost:3333';

export const fetchWrapper = async (url: string, options: {}) => {
  const response = await fetch(`${BASE_URL}${url}`, {
    ...options,
    next: { revalidate: 60 },
  });
  return await response.json();
};
