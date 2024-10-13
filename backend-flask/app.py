from flask import Flask, request, jsonify
from flask_cors import CORS 
from pymongo import MongoClient
import joblib
import random

app = Flask(__name__)
CORS(app)
model = joblib.load('decision_tree_model.pkl')

# Connect to MongoDB
client = MongoClient('mongodb+srv://pranjalbcse2283:123321@witty.iwn24tf.mongodb.net')
db = client['feed']  # Replace 'your_database_name' with your actual database name
feedback_collection = db['feedback']  # Collection for storing feedback

@app.route('/', methods=['GET'])
def hello():
    return "Hello from Flask!"

@app.route('/predict_risk', methods=['POST'])
def predict_risk():
    data = request.get_json()
    features = data['features']
    # Assuming you preprocess features if needed before making predictions
    prediction = model.predict([features])[0]
    # Convert int64 to regular int for JSON serialization
    prediction = int(prediction)
    return jsonify({'prediction': prediction})

@app.route('/submit_feedback', methods=['POST'])
def submit_feedback():
    data = request.get_json()
    email = data.get('email')
    feedback = data.get('feedback')

    if email and feedback:
        # Save feedback to MongoDB
        feedback_document = {'email': email, 'feedback': feedback}
        feedback_collection.insert_one(feedback_document)
        return jsonify({'message': 'Feedback submitted successfully!'})
    else:
        return jsonify({'error': 'Email and feedback are required.'}), 400

@app.route('/allocate_investments', methods=['POST'])
def allocate_investments():
    data = request.get_json()
    age = data.get('age')
    risk_appetite_percentage = data.get('risk_appetite_percentage')
    total_amount = data.get('total_amount')
    
    # Check if age, risk_appetite_percentage, and total_amount are valid numbers
    if age and risk_appetite_percentage and total_amount:
        try:
            age = int(age)
            risk_appetite_percentage = float(risk_appetite_percentage)
            total_amount = float(total_amount)
        except ValueError:
            return jsonify({'error': 'Invalid input data. Age, risk appetite percentage, and total amount must be numbers.'}), 400
        
        # Calculate equity percentage based on age (100 - age)
        equity_percentage = 100 - age
        
        # Define base allocation percentages
        base_mutual_funds_percentage = 30
        base_index_funds_percentage = 20
        base_gold_percentage = 25
        base_fds_percentage = 25
        
        # Adjust allocation percentages based on risk appetite
        risk_factor = risk_appetite_percentage / 100
        
        adjusted_mutual_funds_percentage = base_mutual_funds_percentage * risk_factor
        adjusted_index_funds_percentage = base_index_funds_percentage * risk_factor
        adjusted_gold_percentage = base_gold_percentage * risk_factor
        adjusted_fds_percentage = base_fds_percentage * risk_factor
        
        # Calculate investment amounts based on adjusted allocation percentages
        mutual_funds_amount = total_amount * (adjusted_mutual_funds_percentage / 100)
        index_funds_amount = total_amount * (adjusted_index_funds_percentage / 100)
        gold_amount = total_amount * (adjusted_gold_percentage / 100)
        fds_amount = total_amount * (adjusted_fds_percentage / 100)
        
        allocation = {
            'equity': equity_percentage,
            'mutual_funds': mutual_funds_amount,
            'index_funds': index_funds_amount,
            'gold': gold_amount,
            'fds': fds_amount
        }
        
        return jsonify({'allocation': allocation})
    else:
        return jsonify({'error': 'Age, risk appetite percentage, and total amount are required.'}), 400
if __name__ == '__main__':
    app.run(debug=True)
