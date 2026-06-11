import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

type Movie = {
  id: number;
  poster_path: string;
  title: string;
  release_date: string;
};

export default function MovieCard({ movie }: { movie: Movie }) {
  const router = useRouter();
  return (
      <div  
       style={{
        cursor: "pointer",
        transition: "0.3s",

      }}
      >
        <div 
        style={{
          width: 160,
          height: 240,
          position: "relative",
          backgroundColor: movie.poster_path ? "transparent" : "black",
        }}
      >
        <Image
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          width={200}
          height={300}
           style={{ borderRadius: 10, objectFit: "cover" }} onClick={() => router.push(`/movie/${movie.id}`)}
        />
        </div>

        <h3  style={{
          fontSize: 13,
          marginTop: 8,
          color: "#ccc",
          width: 160,
        }}>{movie.title}</h3>

        <p style={{ color: "#777", fontSize: 12 }}>
          {movie.release_date}
        </p>
      </div>
  );
}