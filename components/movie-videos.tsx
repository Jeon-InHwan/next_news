import { API_URL } from "../app/(home)/page";

async function getVidoes(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 6000));
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
}

export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVidoes(id);
  return <h6>{JSON.stringify(videos)}</h6>;
}
