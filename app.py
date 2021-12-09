from flask import Flask, render_template, request, jsonify
import pickle
import pandas as pd
import numpy as np
# from sklearn.preprocessing import StandardScaler


app = Flask(__name__)

@app.route("/")
def index():
	return render_template('index.html.jinja')

@app.route('/process_to_model', methods=['POST', 'GET'])
def process_to_model():
  if request.method == "POST":
    diabetes = request.get_json()
    
    with open('model_rfc.pkl', 'rb') as r:  
      model = pickle.load(r)    
    
    pregnancies, glucose, bloodPressure, skinThickness, insulin, bmi, diabetesPedigreeFunction, age = diabetes.values()

    datas = np.array([pregnancies, glucose, bloodPressure, skinThickness, insulin, bmi, diabetesPedigreeFunction, age]).reshape(1, -1)

    columns = ["Pregnancies", "Glucose", "BloodPressure", "SkinThickness", "Insulin", "BMI", "DiabetesPedigreeFunction", "Age"]
    datas_df = pd.DataFrame(datas, columns=columns)
    
		# scaler = StandardScaler()
		# datas = datas.reshape(-1, 1)
    # datas_df = pd.DataFrame(scaler.fit_transform(datas), columns=columns)
    # print(datas_df)
    isDiabetes = model.predict(datas_df)
    if (isDiabetes == 0):
      result = 'negatif'
    else:
      result = 'positif'
    response = {'response': result}
  return jsonify(response)