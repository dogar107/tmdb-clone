import { getMovieDetails } from "@/lib/api";
import Image from "next/image";

export default async function MovieDetails({
  params,
}: {
  params: { id: string };
}) {
  const movie = await getMovieDetails(
    params.id
  );

  return (
    <div  style={{
        display: "grid",
        gridTemplateColumns:
          "repeat(auto-fill, minmax(160px, 1fr))",
        gap: 15,
        marginTop: 20,
      }}>
      <h1>{movie.title}</h1>

      <Image
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />

      <p>{movie.overview}</p>

      <p>
        Release Date: {movie.release_date}
      </p>
    </div>
  );
}