


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
![Home Page](./assets/home.png)

### 📊 Dashboard
![Dashboard](https://github.com/Darshangnayak/Ace-Interview/blob/489e4754a3db8964dfdaf1ed079d63d72284d2d7/Dashboard.png)

### 🔐 Login & Signup
![Login and Signup](./assets/login-signup.png)

### 🆕 New Session
![New Session](./assets/new-session.png)

### ❓ Question Generation
![Question Generation](./assets/question-generation.png)

### ➕ Load More Questions
![Load More Questions](./assets/load-more.png)

### 🗑️ Delete Session
![Delete Session](./assets/delete-session.png)


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

## 🧪 Demo Login

You can test the application using the following demo credentials:

- **Email:** `alice@example.com`
- **Password:** `password123`
