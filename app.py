from fastapi import FastAPI, Form
from fastapi.middleware.cors import CORSMiddleware
import pickle
import numpy as np
# import matplotlib.pyplot as plt  # Import matplotlib for plotting

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
    result_proba = gnb_model.predict_proba(final_features)[0]
    
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
    
    return {"result": r, "result_proba": result_proba.tolist(),"result_no":result1.tolist()}  # Convert result_proba to a list

# for probability chart    
# stress_level_labels = np.array(["Low/Normal", "Medium Low", "Medium", "Medium High", "High"])
# plt.figure(figsize=(6,5))
# plt.bar(stress_level_labels, gnb_model.predict_proba(final_features)[0], color='green')
# plt.xlabel('Stress Levels')
# plt.ylabel('Probability')
# plt.title('Predicted Stress Level Probabilities')
# store_graph = plt.show()