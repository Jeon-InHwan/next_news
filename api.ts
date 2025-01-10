export const NEXT_API_URL = `https://newsapi.org/v2/`;

export async function wsj_getHeadLines() {
  const fetchHeadLines =
    NEXT_API_URL +
    `/everything?domains=wsj.com&apikey=${process.env.NEXT_PUBLIC_SECRET_KEY}`;

  return await fetch(fetchHeadLines).then((response) => response.json());
}
