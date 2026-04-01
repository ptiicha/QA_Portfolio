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
        },
        {
            "title": "Boundary Value Analysis",
            "content": "Focus on edge values where bugs are most likely to occur."
        },
        {
            "title": "Decision Table Testing",
            "content": "Use tables to represent combinations of inputs and expected outcomes."
        },
        {
            "title": "State Transition Testing",
            "content": "Test behavior based on system states and transitions between them."
        },
        {
            "title": "Pairwise Testing",
            "content": "Test all possible pairs of input combinations."
        },
        {
            "title": "Error Guessing",
            "content": "Use experience to guess where defects are likely to occur."
        }
    ]