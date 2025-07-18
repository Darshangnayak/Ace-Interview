


# 🧠 AceInterview – AI-Powered Interview Preparation Website

AceInterview is a smart AI-powered interview preparation platform built using the MERN stack (MongoDB, Express.js, React.js, Node.js) and integrated with Gemini API to generate personalized, role-specific interview questions and answers. Whether you're preparing for software engineering, marketing, design, or data science roles, AceInterview helps you get ready with intelligent question sets, explanations, and note-taking features.



## 🚀 Features

- ✅ **Role-Specific Interview Question Generation** using Gemini API
- 🧠 **Real-time AI Explanations & Follow-up Questions**
- 📝 **Pin, Note & Organize Questions**
- 📊 **Session History & Question Management**
- 🔐 **User Authentication (JWT)**
- 🔄 **Generate More Questions on Demand**
- ☁️ **Fully Responsive UI**

---

## 🛠️ Tech Stack

| Technology | Description |
|------------|-------------|
| **Frontend** | React.js, Tailwind CSS, Axios, React Router |
| **Backend** | Node.js, Express.js, Gemini API |
| **Database** | MongoDB |
| **Authentication** | JWT, bcrypt |
| **API Integration** | Google Gemini (via REST API) |

---
## 📷 Screenshots

### 🏠 Home Page
![Home Page](https://github.com/Darshangnayak/Ace-Interview/blob/861d25f6123ad8ba071bcd50d6d234fd451a9b2e/HomePage%20(2).png)

### 📊 Dashboard
![Dashboard](https://github.com/Darshangnayak/Ace-Interview/blob/489e4754a3db8964dfdaf1ed079d63d72284d2d7/Dashboard.png)

### 🔐 Login & Signup
![Login and Signup](https://github.com/Darshangnayak/Ace-Interview/blob/861d25f6123ad8ba071bcd50d6d234fd451a9b2e/SignUp%26Login%20.jpg)

### 🆕 New Session
![New Session](https://github.com/Darshangnayak/Ace-Interview/blob/861d25f6123ad8ba071bcd50d6d234fd451a9b2e/NewSession.png)

### ❓ Question Generation
![Question Generation](https://github.com/Darshangnayak/Ace-Interview/blob/861d25f6123ad8ba071bcd50d6d234fd451a9b2e/QuestionGeneration.png)

### ➕ Load More Questions
![Load More Questions](https://github.com/Darshangnayak/Ace-Interview/blob/861d25f6123ad8ba071bcd50d6d234fd451a9b2e/LoadMore.png)

### 🗑️ Delete Session
![Delete Session](https://github.com/Darshangnayak/Ace-Interview/blob/861d25f6123ad8ba071bcd50d6d234fd451a9b2e/DeleteSession.png)

 ### 🎥 Demo Video

<video width="100%" controls>
  <source src="https://github.com/Darshangnayak/Ace-Interview/raw/main/project%20video%20(1)%20(1).mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>


## 🧪 Demo Login

You can test the application using the following demo credentials:

- **Email:** `alice@example.com`
- **Password:** `password123`


## 📦 Installation

```bash

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install

## 🔧  Configuration
Backend (/backend/.env)

PORT=8000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret
GEMINI_API_KEY=your_gemini_api_key

Frontend (/frontend/.env)

VITE_API_BASE_URL=http://localhost:8000/api

▶️ Run the App Locally

# Run backend
cd backend
npm run dev

# Run frontend
cd ../frontend
npm run dev

