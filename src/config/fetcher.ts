const API_ACCESS_TOKEN = import.meta.env.VITE_API_ACCESS_TOKEN;

export const fetcher = (url: string) =>
  fetch(url, {
    headers: {
      Authorization: `Bearer ${API_ACCESS_TOKEN}`,
      'Content-Type': 'application/json;charset=utf-8',
    },
  }).then((res) => res.json());
