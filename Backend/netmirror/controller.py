from utils.ai import ai_recommend
from utils import tmdb

def get_movies():
    return tmdb.get_movies()

def get_popular_movies():
    return tmdb.getpopularMovies()

def get_movie_details(movie_id):
    return tmdb.get_movie_details(movie_id)

def search_movies(query):
    return tmdb.search_movies(query)

def recommend_movies(user_prompt):
    movies = tmdb.getpopularMovies().get("results", [])
    return ai_recommend(user_prompt, movies)
