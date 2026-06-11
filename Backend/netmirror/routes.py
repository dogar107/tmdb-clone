from fastapi import APIRouter
from netmirror import controller

router = APIRouter()



@router.get("/movies/recommend")
def recommend(q: str):
    return controller.recommend_movies(q)

@router.get("/movies/popular")
def popular():
    return controller.get_popular_movies()

@router.get("/movies/search")
def search(q: str):
    return controller.search_movies(q)



@router.get("/movies/{movie_id}")
def movie_details(movie_id: int):
    return controller.get_movie_details(movie_id)

