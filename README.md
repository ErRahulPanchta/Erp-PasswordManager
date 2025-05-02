# 🔐 Password Manager

A secure password manager built using the **MERN Stack** (MongoDB, Express, React, Node.js). This app allows users to store and manage their credentials with client-side encryption and authentication.

## 🚀 Live Demo

🔗 [Live Website](https://erp-password-manager.vercel.app/)

## 🛠️ Tech Stack

- **Frontend:** React, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Atlas)
- **Authentication:** JWT (JSON Web Tokens)
- **Security:** bcrypt, HTTPS, Helmet, dotenv
  
## ✨ Features

- ✅ User authentication (JWT-based)
- ✅ Add, edit, and delete credentials
- ✅ Secure password encryption
- ✅ Responsive UI with Tailwind CSS
- ✅ Protected routes and validation
- ✅ Light/Dark mode toggle (optional)

## 📸 Screenshots

![Screenshot1](password.png)
## 📦 Installation

### Clone the Repository

```bash
git clone https://github.com/ErRahulPanchta/password-manager.git
cd password-manager

```
Backend Setup
```bash
cd backend
npm install
```
Create a .env file in backend/:

env

PORT=5000
JWT_SECRET=your_jwt_secret_key
MONGODB_URI=your_mongo_connection_uri
Start backend server:

```bash
npm run dev
```
Frontend Setup
```bash
cd ../frontend
npm install
```
Create a .env file in frontend/:

env
VITE_API_URL=http://localhost:5000
Start the frontend:
```bash
npm run dev
```
🔐 Security Notes
Always store secrets like JWT keys in environment variables.

Use HTTPS in production.

Passwords are hashed before saving to the database.

📁 Folder Structure
bash
Copy
Edit
password-manager/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── .env
│   └── server.js
└── frontend/
    ├── src/
    ├── .env
    └── vite.config.js
✍️ Author
Rahul Panchta

GitHub: @ErRahulPanchta

LinkedIn: Rahul Panchta

💡 Contributions, stars, and feedback are welcome!

```yaml
Would you like me to generate the README for the **Todo Manager** or **Spotify Clone** as well?
