const API_BASE_URL = 'http://127.0.0.1:8000';

export async function makeApiRequest<T>(url: string, data: any): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${url}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('API request failed');
  }

  return response.json();
}