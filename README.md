# 🛒 QuickPick E-Commerce Website

**QuickPick** is a fully functional and responsive **MERN stack e-commerce website** developed to showcase end-to-end full stack development skills. It includes user authentication, product management, cart functionality, payment integration, and API usage — all built with modern technologies.

> 🔧 Built with **MongoDB**, **Express.js**, **React.js**, and **Node.js**

---

## 📁 Project Structure

```
QuickPick-E-Commerce-Website/
├── backend/
│ ├── config/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── middleware/
│ ├── server.js
│ └── .env
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── App.js
│ │ └── index.js
│ ├── public/
│ └── tailwind.config.js
├── README.md
└── package.json
```


---

## 🚀 Features

### ✅ User Side
- Sign Up / Login / Logout
- Product listing with details
- Add to Cart / Remove from Cart
- Quantity update in cart
- Checkout page with total
- Payment gateway integration
- Mobile responsive design

### 🛠 Admin Side
- Admin authentication
- Add/Update/Delete products using API
- View all users and orders
- Dashboard overview (future)

---

## 🛠 Tech Stack

| Category     | Tech Used                       |
|--------------|----------------------------------|
| Frontend     | React.js, Tailwind CSS, Axios    |
| Backend      | Node.js, Express.js              |
| Database     | MongoDB (via Mongoose)           |
| Auth & API   | JWT, REST APIs                   |
| Storage      | MongoDB Atlas / Cloudinary (optional) |
| Deployment   | Render, GitHub                   |

---

## 💻 How It Works

### Backend
- RESTful API created using Express.js
- MongoDB stores users, products, and orders
- Authentication with JWT tokens
- Controllers handle business logic
- API routes for products, users, cart, and orders

### Frontend
- React with functional components & hooks
- Pages like Home, Product Details, Cart, Checkout
- Axios used to interact with API
- Tailwind CSS for responsive UI
- State management via React hooks and context

---

## 📦 API Endpoints (Sample)

| Method | Endpoint            | Description               |
|--------|---------------------|---------------------------|
| GET    | `/api/products`     | Get all products          |
| POST   | `/api/products`     | Create new product (admin)|
| POST   | `/api/users/login`  | User login                |
| POST   | `/api/users/register` | User registration       |
| POST   | `/api/cart/add`     | Add product to cart       |
| GET    | `/api/cart`         | Get user’s cart           |

---

## 🛠 Setup Instructions

### 1. Clone Repo
```bash
git clone https://github.com/princebhatt03/QuickPick-E-Commerce-Website.git
cd QuickPick-E-Commerce-Website
```

2. Install Backend Dependencies
```
cd backend
npm install
```

3. Set Up Environment Variables (.env)
```
PORT=5000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret
```

📸 Screenshots
```
![s1](https://github.com/user-attachments/assets/f1b3f55b-613b-4a39-8c71-f3755601723e)
<br>
![s2](https://github.com/user-attachments/assets/0a18864f-c26f-4115-991c-6506baf900b8)
```

📌 Future Improvements
✅ Product Ratings & Reviews

✅ Order History

⏳ Admin Dashboard (Charts/Orders)

⏳ Coupon Code Support

⏳ Cloudinary for Image Hosting

⏳ Razorpay/Stripe Payment Gateway

⏳ Pagination & Search Filters

## 🧑‍💻 Author

**Prince Bhatt**

- 📧 Email: [princebhatt316@gmail.com](mailto:princebhatt316@gmail.com)  
- 🔗 GitHub: [princebhatt03](https://github.com/princebhatt03)  
- 💼 LinkedIn: [Prince Bhatt](https://www.linkedin.com/in/prince-bhatt-0958a725a/)  
- 🌐 Portfolio: [https://princebhatt03.github.io/Portfolio/](https://princebhatt03.github.io/Portfolio/)


⚖️ License
This project is licensed under the MIT License

🙌 Contributions
Contributions, ideas, suggestions, and improvements are always welcome. Feel free to fork and submit a pull request!

