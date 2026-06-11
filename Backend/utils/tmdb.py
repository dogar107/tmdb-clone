

import os
import requests
from dotenv import load_dotenv

load_dotenv()

BASE_URL = "https://api.themoviedb.org/3"
API_KEY = os.getenv("TMDB_API_KEY")
print("API KEY =", API_KEY)

def getpopularMovies():
    url = f"{BASE_URL}/movie/popular?api_key={API_KEY}"

    response = requests.get(url)

    print("STATUS:", response.status_code)
    print("DATA:", response.text)

    if response.status_code == 200:
        return response.json()

    return {"error": response.text}


def get_movies():
    url = f"{BASE_URL}/movies/now_playing?api_key={API_KEY}"
    response = requests.get(url)
    if response.status_code == 200:
        return response.json()
    return {"error": "Failed to fetch movies"}

def get_movie_details(movie_id):
    url = f"{BASE_URL}/movies/{movie_id}?api_key={API_KEY}"
    response = requests.get(url)
    if response.status_code == 200:
        return response.json()
    return {"error": "Failed to fetch movie details"}

def search_movies(query):
    url = f"{BASE_URL}/search/movie?api_key={API_KEY}&query={query}"
    response = requests.get(url)

    if response.status_code == 200:
        return response.json()

    return {"results": []}

def get_movie_details(movie_id):
    url = f"https://api.themoviedb.org/3/movie/{movie_id}?api_key={API_KEY}"
    return requests.get(url).json()


def get_movie_videos(movie_id):
    url = f"https://api.themoviedb.org/3/movie/{movie_id}/videos?api_key={API_KEY}"
    return requests.get(url).json()

def get_similar_movies(movie_id):
    url = f"https://api.themoviedb.org/3/movie/{movie_id}/similar?api_key={API_KEY}"
    return requests.get(url).json()

