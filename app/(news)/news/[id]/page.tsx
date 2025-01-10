import { Suspense } from "react";
import MovieVideos from "../../../../components/movie-videos";

export default async function NewsDetail({ params }) {
  const { id } = await params;

  return (
    <div>
      <Suspense fallback={<h1>Loading movie info</h1>}></Suspense>
      <Suspense fallback={<h1>Loading movie videos</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
