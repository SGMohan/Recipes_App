# 🍽️ Recipe Management API

![Node.js](https://img.shields.io/badge/Node.js-14+-339933?logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-4.x-000000?logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-5.0+-47A248?logo=mongodb&logoColor=white)

A RESTful API for managing recipes built with **Node.js**, **Express**, and **MongoDB**.

## ✨ Features

### 🧾 CRUD Operations
- 📝 Create new recipes  
- 📖 Read recipe details  
- ✏️ Update existing recipes  
- 🗑️ Delete recipes  

### 🛢️ Database Integration
- 🏗️ MongoDB with Mongoose ODM  
- 🔐 Environment variable configuration  

### ⚠️ Error Handling
- 🚨 Comprehensive error responses  
- ✅ Success/error status indicators  

### 📐 API Standards
- 📦 JSON request/response format  
- 🔄 RESTful endpoint design  

## 🛠️ Technologies Used

| Technology   | Purpose                        |
|--------------|--------------------------------|
| Node.js      | JavaScript runtime             |
| Express.js   | Web application framework      |
| MongoDB      | NoSQL database                 |
| Mongoose     | MongoDB object modeling        |
| dotenv       | Environment variable config    |
| Postman      | API testing & documentation    |


## 🚀 Getting Started

### ✅ Prerequisites

- Node.js (v14 or higher)  
- MongoDB (Local or Atlas)  
- npm (comes with Node.js)  
- Postman  

### 📦 Installation

1. Install dependencies:
```bash
npm install
```

### ⚙️ Environment Configuration


2. Create a .env file and add the following configuration
```.env
# Server Configuration
PORT=3000
HOSTNAME=localhost

# Database Configuration
MONGO_URI=mongodb://localhost:27017/recipes
```
3. Start the server:
```bash
npm start
```

### 🧾 Recipe Endpoints


| Method                                                                | Endpoint                         | Description           |
|-----------------------------------------------------------------------|----------------------------------|-----------------------|
| ![GET](https://img.shields.io/badge/METHOD-GET-brightgreen)           | `/api/recipes`                   | Get all recipes       |
| ![GET](https://img.shields.io/badge/METHOD-GET-brightgreen)           | `/api/recipes/:id`               | Get recipe by ID      |
| ![POST](https://img.shields.io/badge/METHOD-POST-yellow)              | `/api/recipes/`                  | Create new recipe     |
| ![PUT](https://img.shields.io/badge/METHOD-PUT-blue)                  | `/api/recipes/:id`               | Update recipe         |
| ![DELETE](https://img.shields.io/badge/METHOD-DELETE-red)             | `/api/recipes/:id`               | Delete recipe         |


### 📂 Folder Structure

Recipes_App/
├── config/
│   └── db.js
├── models/
│   └── Recipe.js
├── controllers/
│   └── recipeController.js
├── .env
├── .gitignore
├── index.js
└── package.json


## 🚀 Deployment on Render

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy)

This API is deployed on **Render** - a modern cloud platform for hosting web services.

### 🌐 Live Deployment
🔗 **Production URL**: [https://your-recipe-api.onrender.com](https://your-recipe-api.onrender.com)  
🔗 **API Docs**: [https://your-recipe-api.onrender.com/api-docs](https://your-recipe-api.onrender.com/api-docs)

### ⚙️ Render Configuration
1. **Service Type**: Web Service
2. **Runtime**: Node.js 18+
3. **Build Command**: `npm install && npm run build`
4. **Start Command**: `node server.js`
5. **Auto-Deploy**: Enabled on Git push to `main` branch

### 📦 Environment Variables
Configured in Render Dashboard:
```env
PORT=10000
MONGO_URI=mongodb+srv://<user>:<password>@cluster.mongodb.net/recipes
NODE_ENV=production
```
