export const fetchMovies = async () => {
  try {
    const res = await fetch("http://localhost:8000/movies/popular");

    const data = await res.json();

    console.log(data);

    return data;
  } catch (err) {
    console.log(err);
    return { results: [] };
  }
}

  export const getMovieDetails = async (id) => {
    try {
      const res = await fetch(
        `http://localhost:8000/movies/${id}`
      );
      const data = await res.json();
      return data;
    } catch (err) {
      console.log(err);
      return { title: "Movie not found", overview: "Sorry, we couldn't find that movie." };
    }
  }