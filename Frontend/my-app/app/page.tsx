import { fetchMovies } from "@/lib/api";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import Link from "next/link";
import useRouter from "next/navigation";
import AIChat from "./components/Aichat";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
}


export default async function Home() {

 
  const data = await fetchMovies();
  

  return (
    <div 
      style={{
        backgroundColor: "black",
        minHeight: "100vh",
        color: "white",
        paddingTop: 80,
        paddingLeft: 20,
        paddingRight: 20,
      }}
    >
      <Navbar />

      <h1 style={{ marginBottom: 10 }}>
        Popular Movies
      </h1>

      <Searchbar />

     
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: 20,
          marginTop: 20,
        }}
      >
       {data?.results?.map((movie: Movie) => (
  <Link key={movie.id} href={`/movie/${movie.id}`} style={{ textDecoration: 'none' }}>
  <div
    style={{
      textAlign: "center",
      backgroundColor: "#111",
      padding: 10,
      borderRadius: 10,
    }}
  >
    {/* IMAGE FIRST */}
    <img
      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
      alt={movie.title}
      style={{
        width: "100%",
        height: 300,
        objectFit: "cover",
        borderRadius: 10,
      }}
    />

    {/* TITLE */}
    <h3 style={{ fontSize: 14, marginTop: 10 }}>
      {movie.title}
    </h3>

    
    <p style={{ color: "gold", fontSize: 12 }}>
      ⭐ Rating: {movie.vote_average}
    </p>

    {/* RELEASE DATE */}
    <p style={{ color: "#aaa", fontSize: 12 }}>
      Release: {movie.release_date}
    </p>
  </div>
  </Link>
))}
      </div>
      <AIChat />
    </div>
  );
}