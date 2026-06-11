import os
from dotenv import load_dotenv
from openai import OpenAI

load_dotenv()

api_key = os.getenv("OPENAI_API_KEY")

if not api_key:
    raise Exception("OPENAI_API_KEY is missing in .env file")

client = OpenAI(api_key=api_key)


def ai_recommend(user_prompt, movies):
    movie_text = "\n".join([
        f"{m['title']} | Rating: {m.get('vote_average')} | {m.get('overview')}"
        for m in movies[:20]
    ])

    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {
                "role": "system",
                "content": "You are a movie recommendation expert like IMDb assistant."
            },
            {
                "role": "user",
                "content": f"""
User wants: {user_prompt}

Movies:
{movie_text}

Give top 5 recommendations with:
- title
- reason
- rating
"""
            }
        ]
    )

    return response.choices[0].message.content