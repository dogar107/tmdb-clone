import { notFound } from "next/navigation";

async function getMovie(id: string) {
  const res = await fetch(`http://localhost:8000/movies/${id}`);
  if (!res.ok) return null;
  return res.json();
}



export default async function MoviePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;   

  const movie = await getMovie(id);
  if (!movie) notFound();

  

  return (
    <div style={{ padding: 20, color: "white", background: "black", height:"660px" }}>
      
      {/* HERO */}
      <div style={{ display: "flex", gap: 20 }}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          style={{ width: 300, borderRadius: 10, objectFit: "cover" }}
        />

        <div>
          <h1>{movie.title}</h1>
          <p>{movie.overview}</p>

          <p>⭐ Rating: {movie.vote_average}</p>
          <p>🎬 Original Language: {movie.original_language}</p>
          <p>📈 Popularity: {movie.popularity}</p>
          <p>⏱️ Runtime: {movie.runtime} minutes</p>
          <p>📅 Release: {movie.release_date}</p>
          <p>👥 Vote Count: {movie.vote_count}</p>
          <p>🎥 Genres: {movie.genres.map((g: any) => g.name).join(", ")}</p>
          <p>🎭 Production Companies: {movie.production_companies.map((c: any) => c.name).join(", ")}</p>
        </div>
      </div>

   
    </div>
  );
}