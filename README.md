Admin Login Details:-

Email: admin@fablab.com,
Password: Admin@123

# FabLab Website

## Overview

FabLab Website is a full-stack web application developed to showcase the activities, research, projects, laboratories, team members, organizational structure, videos, and contact information of an Innovation & Research Laboratory.

The platform consists of:

* Public Website for visitors
* Admin Dashboard for content management
* REST API Backend
* MongoDB Database
* JWT Authentication System

The system allows administrators to manage all website content through a secure dashboard while providing a modern and responsive experience to visitors.

---

# Project Objectives

The primary objectives of this project are:

* Showcase Research Laboratories
* Display Ongoing and Completed Projects
* Present Team Members and Leadership
* Publish Educational and Research Videos
* Display Organization Structure
* Manage Contact Messages
* Provide Secure Admin Management Panel
* Create a Fully Responsive User Experience
* Maintain Scalable Architecture

---

# Tech Stack

## Frontend

* React.js
* React Router DOM
* React Query (TanStack Query)
* Axios
* Tailwind CSS
* React Hot Toast
* React Helmet Async
* React Icons

---

## Backend

* Node.js
* Express.js

---

## Database

* MongoDB
* Mongoose ODM

---

## Authentication

* JWT Access Token
* JWT Refresh Token
* Role-Based Authorization

---

# System Architecture

Client Browser
↓
React Frontend
↓
Axios API Calls
↓
Express REST API
↓
Authentication Middleware
↓
Controllers
↓
Services
↓
MongoDB Database

---

# Application Flow

## Public User Flow

User Opens Website
↓
Frontend Requests Data
↓
Backend APIs Fetch Data
↓
MongoDB Returns Records
↓
Frontend Displays Content

Examples:

* Home Page
* Labs
* Projects
* Team
* Videos
* Organogram
* Contact

---

## Admin Flow

Admin Login
↓
JWT Access Token Generated
↓
Token Stored in Local Storage
↓
Admin Accesses Dashboard
↓
Perform CRUD Operations
↓
Database Updated
↓
React Query Refetches Data
↓
UI Updates Automatically

---

# Folder Structure

## Frontend

frontend/

src/

api/

components/

admin/

common/

home/

labs/

projects/

team/

videos/

layouts/

context/

pages/

admin/

routes/

App.jsx

main.jsx

---

## Backend

backend/

src/

config/

controllers/

middleware/

models/

routes/

services/

utils/

app.js

server.js

---

# Installation Guide

## Clone Repository

```bash
git clone https://github.com/your-username/fablab-website.git
```

```bash
cd fablab-website
```

---

# Backend Setup

Navigate to backend:

```bash
cd backend
```

Install Dependencies:

```bash
npm install
```

Create .env file:

```env
PORT=3000

MONGO_URI=mongodb://localhost:27017/fablab

JWT_SECRET=your_jwt_secret

JWT_REFRESH_SECRET=your_refresh_secret
```

Start Backend:

```bash
npm run dev
```

Backend Running:

```bash
http://localhost:3000
```

---

# Frontend Setup

Navigate to frontend:

```bash
cd frontend
```

Install Dependencies:

```bash
npm install
```

Start Frontend:

```bash
npm run dev
```

Frontend Running:

```bash
http://localhost:5173
```

---

# Environment Variables

## Backend

```env
PORT=3000

MONGO_URI=

JWT_SECRET=

JWT_REFRESH_SECRET=
```

---

# Database Models

## Admin

Stores administrator accounts.

Fields:

* name
* email
* password
* role

---

## Lab

Stores research laboratories.

Fields:

* name
* slug
* shortDescription
* description
* status

---

## Project

Stores project information.

Fields:

* title
* slug
* shortDescription
* description
* status

---

## Team

Stores team member information.

Fields:

* name
* designation
* department
* category
* image
* bio

---

## Video

Stores video content.

Fields:

* title
* slug
* description
* thumbnail
* videoUrl
* sourceType
* category
* featured
* status

---

## Contact

Stores contact form submissions.

Fields:

* name
* email
* phone
* subject
* message
* status

---

# Frontend Working

## Data Fetching

React Query is used for:

* Caching
* Background Refetching
* Optimistic Updates
* Auto Synchronization

Example:

```javascript
useQuery({
  queryKey: ["labs"],
  queryFn: getLabs,
});
```

---

## Routing

React Router handles:

```text
/
 /labs
 /labs/:slug
 /projects
 /projects/:slug
 /team
 /videos
 /organogram
 /contact

/admin
/admin/labs
/admin/projects
/admin/team
/admin/videos
/admin/messages
/admin/settings
```

---

# Backend Working

Request
↓
Route
↓
Middleware
↓
Controller
↓
MongoDB
↓
Response

Example:

```text
GET /api/v1/labs

Route
→ Controller
→ Lab Model
→ MongoDB
→ JSON Response
```

---

# Authentication Flow

Admin Login

```http
POST /api/v1/admin/login
```

Response:

```json
{
  "success": true,
  "accessToken": "...",
  "refreshToken": "...",
  "admin": {
    "id": "123",
    "name": "Admin"
  }
}
```

Tokens stored in:

```javascript
localStorage
```

Every protected request automatically sends:

```http
Authorization: Bearer TOKEN
```

---

# API Documentation

## Admin APIs

### Login

POST

```http
/api/v1/admin/login
```

Purpose:

Authenticate Admin

Response:

```json
{
  "success": true,
  "accessToken": "",
  "refreshToken": "",
  "admin": {}
}
```

---

### Refresh Token

POST

```http
/api/v1/admin/refresh
```

Purpose:

Generate New Access Token

---

# Labs APIs

### Get Labs

GET

```http
/api/v1/labs
```

Response:

```json
{
  "success": true,
  "data": []
}
```

---

### Create Lab

POST

```http
/api/v1/labs
```

Protected Route

---

### Update Lab

PUT

```http
/api/v1/labs/:id
```

Protected Route

---

### Delete Lab

DELETE

```http
/api/v1/labs/:id
```

Protected Route

---

# Projects APIs

GET

```http
/api/v1/projects
```

POST

```http
/api/v1/projects
```

PUT

```http
/api/v1/projects/:id
```

DELETE

```http
/api/v1/projects/:id
```

---

# Team APIs

GET

```http
/api/v1/team
```

POST

```http
/api/v1/team
```

PUT

```http
/api/v1/team/:id
```

DELETE

```http
/api/v1/team/:id
```

---

# Video APIs

GET

```http
/api/v1/videos
```

GET

```http
/api/v1/videos/featured
```

POST

```http
/api/v1/videos
```

PUT

```http
/api/v1/videos/:id
```

DELETE

```http
/api/v1/videos/:id
```

---

# Contact APIs

POST

```http
/api/v1/contact
```

Purpose:

Submit Contact Form

---

GET

```http
/api/v1/contact
```

Admin Only

---

PATCH

```http
/api/v1/contact/:id/status
```

Admin Only

---

DELETE

```http
/api/v1/contact/:id
```

Admin Only

---

# Important Features

* JWT Authentication
* Refresh Token Mechanism
* Secure Admin Dashboard
* Responsive Design
* React Query Caching
* SEO Support
* Video Gallery
* Team Management
* Labs Management
* Projects Management
* Contact Management
* Role-Based Access Control
* Protected Routes
* Toast Notifications

---

# Future Enhancements

* Image Upload via Cloudinary
* Rich Text Editor
* Analytics Dashboard
* Activity Logs
* Multi Admin Support
* Audit Trail
* Email Notifications
* Search & Filtering
* Pagination
* AI Recommendation Engine

---

# Deployment

## Frontend

Recommended:

* Vercel
* Netlify

## Backend

Recommended:

* Render
* Railway
* VPS

## Database

Recommended:

* MongoDB Atlas

---

# Author

Tarun Kumar

Full Stack MERN Developer

Built with React.js, Node.js, Express.js and MongoDB.


