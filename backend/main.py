from fastapi.middleware.cors import CORSMiddleware


from fastapi import FastAPI

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/topics")
def get_topics():
    return [
        {
            "title": "Equivalence Partitioning",
            "content": "Divide inputs into groups and test one value from each group"
        }
    ]