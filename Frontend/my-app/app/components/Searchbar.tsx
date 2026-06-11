"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Searchbar() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState<any[]>([]);

  const search = async () => {
    if (!query) return;

    const res = await fetch(
      `http://localhost:8000/movies/search?q=${query}`
    );

    const data = await res.json();

    setMovies(data.results || []);
  };

  return (
    <div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search movies..."
        style={{
          padding: 10,
          width: 250,
          borderRadius: 5,
        }}
      />

      
      <button
        onClick={search}
        style={{
          marginLeft: 10,
          padding: "10px 15px",
          backgroundColor: "red",
          color: "white",
          border: "none",
          borderRadius: 5,
        }}
      >
        Search
      </button>

     
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: 20,
          marginTop: 20,
        }}
      >
        {movies.filter((movie) => movie.poster_path).map((movie) => (
          <div
            key={movie.id}
            onClick={() => router.push(`/movie/${movie.id}`)}  
            style={{
              textAlign: "center",
              backgroundColor: "#111",
              padding: 10,
              borderRadius: 10,
              cursor: "pointer", 
            }}
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              style={{
                width: "100%",
                height: 300,
                objectFit: "cover",
                borderRadius: 10,
              }}
            />

            <h3 style={{ fontSize: 14, marginTop: 10 }}>
              {movie.title}
            </h3>

            <p style={{ color: "gold", fontSize: 12 }}>
              ⭐ Rating: {movie.vote_average}
            </p>

            <p style={{ color: "#aaa", fontSize: 12 }}>
              Release: {movie.release_date}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}