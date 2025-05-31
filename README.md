
 # CareerQ - Career and Mental Health Predictor 

CareerQ is an intelligent career path recommendation platform designed to guide students in choosing the right career based on their interests, hobbies, academic performance, and mental well-being. The system also monitors stress and anxiety levels to offer a more personalized and supportive recommendation experience.

## 🔍 Overview

Choosing a suitable career can be overwhelming for students. CareerQ simplifies this process by using machine learning models to analyze students' responses and suggest the most fitting career options. It also incorporates mental health assessment to ensure well-rounded support for the user.


### Key Features:
-  **Career Prediction** — Suggests careers based on interest, hobbies, and academics.
- **Mental Health Assessment** — Detects stress or anxiety using user inputs.
- **Machine Learning Models** — Makes predictions based on trained classifiers.
- **Simple and Friendly UI** — React-based frontend for easy interaction.

## 🧠 Tech Stack

| Frontend        | Backend        | Machine Learning     |
|------------------|------------------|------------------------|
| React.js         | Flask (Python)    | Scikit-learn, Pandas, NumPy |
| CSS / Tailwind   | RESTful API       | Trained Classifiers   |


## 📁 Project Structure

```bash
📦 CareerQ/
├── client/                     # Frontend (React app)
├── server/                     # Backend (Flask API)
├── model/                      # ML model files and logic
├── dataset/                    # Training and test datasets
├── README.md                   # Project documentation
└── requirements.txt            # Python dependencies
```

## 🚀 Getting Started

### Prerequisites

- Node.js
- Python 3.8+
- npm or yarn
- Flask
- scikit-learn, pandas, numpy

### Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/SakshiRRathod/CareerQ.git
   cd CareerQ
   ```

2. **Setup Python Backend**
   ```bash
   cd server
   pip install -r requirements.txt
   python app.py
   ```

3. **Setup React Frontend**
   ```bash
   cd ../client
   npm install
   npm start
   ```

---

## 💡 Use Cases

- Personalized career guidance for students
- Mental health-aware academic counseling
- Automated decision-making support tool for institutions

---
## 📈 Model Summary

The system uses machine learning algorithms (such as Decision Trees, Logistic Regression, or SVMs) trained on a custom dataset. Input parameters include:

- Interest Areas
- Hobbies
- Academic Scores
- Mental Health Indicators

Based on these, the model predicts:
- Most suitable career path
- Whether the student is mentally okay or experiencing stress/anxiety

---
## 🔐 Disclaimer

This project is a student-level academic tool. It is not a substitute for professional mental health or career counseling. Use responsibly and ethically.

---
## 📃 License

MIT © 2025 Sakshi sakshirathod8530@gmail.com

---
