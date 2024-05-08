from fastapi import FastAPI, Form
from fastapi.middleware.cors import CORSMiddleware
import pickle
import numpy as np

app = FastAPI()

# CORS middleware to allow requests from your React app
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Adjust this to your React frontend origin
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

gnb_model = pickle.load(open('model_pkl.pkl', 'rb'))

@app.get("/test")
async def test_get():
    return {"message": "This is a test GET endpoint Chandra"}


@app.get("/")
def index():
    return {"message": "Welcome to Human Stress Level Detection!"}

@app.post("/result")
async def getdata(
    snoring_range: float = Form(...),
    respiration_rate: float = Form(...),
    body_temperature: float = Form(...),
    limb_movement_rate: float = Form(...),
    blood_oxygen_levels: float = Form(...),
    eye_movement: float = Form(...),
    hours_of_sleep: float = Form(...),
    heart_rate: float = Form(...),
):
    features = [snoring_range, respiration_rate, body_temperature, limb_movement_rate,
                blood_oxygen_levels, eye_movement, hours_of_sleep, heart_rate]
    
    final_features = [np.array(features)]
    result1 = gnb_model.predict(final_features)
    
    if result1 == 0:
        r = "Low/Normal Stress!"
    elif result1 == 1:
        r = "Medium low Stress!"
    elif result1 == 2:
        r = "Medium Stress!"
    elif result1 == 3:
        r = "Medium high Stress!"
    else:
        r = "High Stress!"
    
    return {"result": r}