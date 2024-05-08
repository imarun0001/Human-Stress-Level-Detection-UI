from flask import Flask, render_template, request
import pickle
import pandas as pd
import numpy as np
#import matplotlib as plt

app = Flask(__name__,template_folder='template')
gnb_model=pickle.load(open('model_pkl.pkl','rb'))

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/result', methods=['POST'])
def getdata():

    features = [float(x) for x in request.form.values()]
    #print(features)
    final_features = [np.array(features)]
    #print(final_features)

    result1 = gnb_model.predict(final_features)
    print(result1)
    if result1==0:
        r="Low/Normal Stress!"
    if result1==1:
        r="Medium low Stress!"
    if result1==2:
        r="Medium Stress!"
    if result1==3:
        r="Medium high Stress!"
    else:
        r="High Stress!"
    
    #for probability chart    
    # stress_level_labels = np.array(["Low/Normal", "Medium Low", "Medium", "Medium High", "High"])
    # plt.figure(figsize=(6,5))
    # plt.bar(stress_level_labels, gnb_model.predict_proba(final_features)[0], color='green')
    # plt.xlabel('Stress Levels')
    # plt.ylabel('Probability')
    # plt.title('Predicted Stress Level Probabilities')
    # store_graph=plt.show()

    return render_template('show.html',  res=r)

if __name__=="__main__":
    app.run(debug=True)