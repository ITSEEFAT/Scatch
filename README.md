
# 🛒 Scatch - E-commerce Application

Scatch is a fully functional e-commerce website built using the MERN stack (MongoDB, Express.js, Node.js, EJS) and Tailwind CSS. It offers a seamless online shopping experience with a clean and responsive design.

---

## 🚀 Features

- 🔐 **User Authentication**: Secure registration and login system with hashed passwords using Bcrypt.
- 📦 **Product Management**: Admins can add, edit, or remove products with image uploads.
- 🛍️ **Shopping Cart**: Logged-in users can add items to their cart and manage them before checkout.
- 📑 **Order Processing**: Users can place orders; admins can view and manage all placed orders.
- 🧑‍💼 **Admin Panel**: Dedicated admin panel for managing users, products, and orders.
- 🌐 **Responsive UI**: Built with Tailwind CSS and EJS to support all screen sizes.
- 🧠 **Session Handling**: Sessions are managed via Express-session for smooth login/logout flow.

---

## 🛠️ Tech Stack

| Technology     | Description                                      |
|----------------|--------------------------------------------------|
| Node.js        | JavaScript runtime environment                   |
| Express.js     | Web framework for Node.js                        |
| MongoDB        | NoSQL database                                   |
| Mongoose       | ODM for MongoDB                                  |
| EJS            | Templating engine for rendering pages            |
| Tailwind CSS   | Utility-first CSS framework                      |
| Passport.js    | Authentication middleware                        |
| Bcrypt         | Password hashing                                 |
| Multer         | Middleware for file uploads                      |
| dotenv         | Manage environment variables                     |

---

## 📸 Screenshots

> Add screenshots here once available.

---

## 🧑‍💻 Installation Instructions

```bash
# 1. Clone the repository
git clone https://github.com/YOUR_USERNAME/Scatch.git
cd Scatch

# 2. Install dependencies
npm install

# 3. Create .env file
cp .env.example .env  # Then edit the values

# 4. Make sure MongoDB is running
mongod

# 5. Start the application
npm start
```

---

## 🔐 Environment Variables (.env)

```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/scatch
SESSION_SECRET=yourSecretKey
```

---

## 🧪 Folder Structure

```
Scatch/
├── config/
├── controllers/
├── models/
├── public/
├── routes/
├── views/
├── uploads/
├── .env
├── app.js
├── package.json
└── README.md
```

---

## 📤 Deployment

You can deploy this project on platforms like:

- [Render](https://render.com)
- [Railway](https://railway.app)
- [Vercel (for frontend only)](https://vercel.com)

Let me know if you'd like help with deployment!

---

## 🧑‍🏫 Author

**ITSEEFAT**  
GitHub: [github.com/ITSEEFAT](https://github.com/ITSEEFAT)

---

## 📄 License

This project is licensed under the MIT License.

---
