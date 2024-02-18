export async function fetchStats(url: string) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Unable to fetch stats`);
  }

  const data = await response.json();
  return data;
}
