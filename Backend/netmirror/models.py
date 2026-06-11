from sqlalchemy import Column, Integer, String
from netmirror.db import Base

class Movie(Base):
    __tablename__ = "movies"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True)
    overview = Column(String)
    release_date = Column(String)
    poster_path = Column(String)
    vote_average = Column(String)