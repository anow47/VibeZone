# VibeZone - MERN Fullstack Social Media App

VibeZone is a social media platform built using the MERN (MongoDB, Express, React, Node.js) stack, allowing friends to connect, share posts, and have fun.

## Features

- User authentication (JWT-based)
- Post creation and sharing
- Image uploads with GridFS
- Real-time updates
- Responsive design with Material UI

## 📦 Tech Stack

- **Frontend:** React, Redux Toolkit, React Router, Material UI
- **Backend:** Node.js, Express, MongoDB, Mongoose
- **Deployment:** Vite for frontend, Node.js for backend

## 🏗️ Installation

### 1. Clone the repository:

```bash
git clone https://github.com/your-username/VibeZone.git
cd VibeZone
```

### 2. Set up environment variables:

Create a `.env` file in both frontend and backend directories.

#### Frontend `.env`:

```
VITE_API_URL=http://localhost:5000
```

#### Backend `.env`:

```
MONGO_URI=mongodb://localhost:27017/vibezone
JWT_SECRET=your_jwt_secret
```

### 3. Install dependencies:

```bash
# Frontend
cd client
npm install

# Backend
cd ../server
npm install
```

### 4. Run the app:

```bash
# Backend
npm run dev

# Frontend (in another terminal)
npm run dev
```

The frontend will be available at `http://localhost:5173` and the backend at `http://localhost:5000`.

## 📂 Frontend Libraries

- **React**: ^19.0.0
- **Redux Toolkit**: ^2.5.1
- **React Redux**: ^9.2.0
- **React Router DOM**: ^6.29.0
- **Material UI**: ^6.4.4
- **Formik**: ^2.4.6
- **Yup**: ^1.6.1
- **React Dropzone**: ^14.3.5

## ⚙️ Backend Libraries

- **Express**: ^4.21.2
- **Mongoose**: ^8.10.0
- **JWT**: ^9.0.2
- **Bcrypt**: ^5.1.1
- **Multer**: ^1.4.5-lts.1
- **GridFS-Stream**: ^1.1.1
- **CORS**: ^2.8.5
- **Helmet**: ^8.0.0
- **Morgan**: ^1.10.0

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## 📧 Contact

For inquiries, reach out at [anow47@yahoo.com](mailto:anow47@yahoo.com).

---
Thank you for visting ❤️.
Hamouda Mohammed.
