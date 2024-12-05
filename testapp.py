from flask import Flask, request, jsonify, make_response
import pickle
import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.preprocessing import LabelEncoder

app = Flask(__name__)

# CORS workaround
@app.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
    response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    return response

# Load and prepare the dataset
try:
    df = pd.read_csv('C:/Users/HP/OneDrive/Desktop/Career/dataset9000.csv')
    print("Columns in the dataset:", df.columns.tolist())
    
    # Assuming the last column is the target variable
    X = df.iloc[:, :-1]
    y = df.iloc[:, -1]
    
    print("Shape of X:", X.shape)
    print("Shape of y:", y.shape)

    # Preprocessing
    label_encoders = {}
    for column in X.columns:
        le = LabelEncoder()
        # Ensure 'not-interested' is always in the label set
        unique_values = X[column].unique().tolist()
        if 'not-interested' not in unique_values:
            unique_values.append('not-interested')
        le.fit(unique_values)
        X[column] = le.transform(X[column])
        label_encoders[column] = le
    
    target_encoder = LabelEncoder()
    y = target_encoder.fit_transform(y)
    
    # Save the label encoders
    with open('label_encoders.pkl', 'wb') as f:
        pickle.dump(label_encoders, f)
    
    # Save the target label encoder
    with open('target_encoder.pkl', 'wb') as f:
        pickle.dump(target_encoder, f)

    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
    
    # Train the model
    model = RandomForestClassifier(n_estimators=100, random_state=42)
    model.fit(X_train, y_train)
    
    # Save the model
    with open("careerlast.pkl", 'wb') as model_file:
        pickle.dump(model, model_file)
    
    print("Model trained and saved successfully.")
except Exception as e:
    print(f"Error loading dataset or training model: {str(e)}")
    exit(1)

# Load the trained model and encoders
try:
    with open("careerlast.pkl", 'rb') as model_file:
        loaded_model = pickle.load(model_file)
    with open('label_encoders.pkl', 'rb') as f:
        label_encoders = pickle.load(f)
    with open('target_encoder.pkl', 'rb') as f:
        target_encoder = pickle.load(f)
    print("Model and encoders loaded successfully.")
except Exception as e:
    print(f"Error loading model or encoders: {str(e)}")
    exit(1)

@app.route('/')
def career():
    return "Welcome to the Career Prediction API"

@app.route('/result', methods=['POST', 'OPTIONS'])
def result():
    if request.method == 'OPTIONS':
        return make_response()
    try:
        data = request.json

        if not data or not isinstance(data, list) or len(data) != X.shape[1]:
            return jsonify({"error": f"Invalid input data. Expected an array of {X.shape[1]} skill ratings."}), 400

        # Encode input data
        encoded_data = []
        for i, value in enumerate(data):
            column = X.columns[i]
            try:
                encoded_value = label_encoders[column].transform([value])[0]
            except ValueError:
                # If an unseen label occurs, use the most frequent label from training data
                most_frequent = label_encoders[column].classes_[0]  # Assumes classes are ordered by frequency
                encoded_value = label_encoders[column].transform([most_frequent])[0]
                print(f"Unseen label '{value}' for column '{column}', defaulting to most frequent: '{most_frequent}'")
            encoded_data.append(encoded_value)

        input_data = np.array(encoded_data).reshape(1, -1)

        predictions = loaded_model.predict(input_data)
        pred_proba = loaded_model.predict_proba(input_data)

        # Get alternative job predictions
        pred = pred_proba > 0.05
        final_res = {}

        for j in range(len(loaded_model.classes_)):
            if pred[0, j] and j != predictions[0]:
                final_res[j] = float(pred_proba[0, j])

        jobs_dict = {i: target_encoder.inverse_transform([i])[0] for i in range(len(loaded_model.classes_))}

        response = {
            "predicted_job": jobs_dict[predictions[0]],
            "prediction_probability": float(pred_proba[0, predictions[0]]),
            "alternative_jobs": {jobs_dict[k]: v for k, v in final_res.items()}
        }

        return jsonify(response)

    except Exception as e:
        print(f"An error occurred: {str(e)}")
        return jsonify({"error": "An error occurred while processing your request. Please ensure all inputs are valid."}), 500

if __name__ == "__main__":
    print("Registered Routes:")
    for rule in app.url_map.iter_rules():
        print(f"{rule.endpoint}: {rule.rule} [{', '.join(rule.methods)}]")
    
    app.run(debug=True, port=8082)