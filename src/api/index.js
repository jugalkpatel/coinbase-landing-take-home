export default async function fetchData(limit, offset) {
  // console.log({ limit, offset });
  const URL = `${process.env.REACT_APP_URL}?limit=${limit}&offset=${offset}`;
  const response = await fetch(URL);
  const data = await response.json();
  if (response.status >= 400) {
    throw new Error("error while fetching data");
  }

  return data.data;
}
