# 🛒 Full-Stack E-Commerce Application

A full-stack e-commerce web application built using **HTML, CSS, JavaScript, Node.js, Express.js, MongoDB, and Mongoose**.

The project provides product management, categories, cart management, orders, and user registration/login through REST APIs.

---

## 🚀 Project Overview

This project is designed to understand how a real-world e-commerce application works from **frontend to backend to database**.

### Application Flow

```text
Frontend
   ↓
JavaScript + Axios
   ↓
REST API
   ↓
Node.js + Express.js
   ↓
Controllers
   ↓
Mongoose Models
   ↓
MongoDB
```

### E-Commerce Flow

```text
User
 ↓
Home Page
 ↓
Browse Products
 ↓
Search Products
 ↓
Select Product
 ↓
Add To Cart
 ↓
Cart
 ↓
Place Order
 ↓
Order History
```

---

# 🛠️ Technologies Used

### Frontend

* HTML5
* CSS3
* JavaScript
* Axios

### Backend

* Node.js
* Express.js
* REST API
* ES Modules

### Database

* MongoDB
* Mongoose

### Development Tools

* Visual Studio Code
* Git
* GitHub
* Nodemon
* Postman

---

# 📁 Project Structure

```text
E-Commerce/
│
├── Backend/
│   │
│   ├── index.js
│   ├── package.json
│   │
│   ├── controllers/
│   │   ├── products.js
│   │   ├── category.js
│   │   ├── cart.js
│   │   ├── order.js
│   │   └── user.js
│   │
│   ├── model/
│   │   ├── products.js
│   │   ├── category.js
│   │   ├── cart.js
│   │   ├── order.js
│   │   └── user.js
│   │
│   └── routes/
│       ├── productRoutes.js
│       ├── categoryRouter.js
│       ├── cartRouter.js
│       ├── orderRouter.js
│       └── user.js
│
│
└── Frontend/
    │
    ├── home.html
    ├── category.html
    ├── cart.html
    ├── order.html
    ├── login.html
    ├── register.html
    │
    ├── css/
    │   ├── home.css
    │   ├── category.css
    │   ├── cart.css
    │   ├── order.css
    │   ├── login.css
    │   └── register.css
    │
    └── js/
        ├── home.js
        ├── category.js
        ├── cart.js
        ├── order.js
        ├── login.js
        └── register.js
```

---

# ✨ Features

## 🏠 Home

* Display all products
* Product cards
* Product image
* Product name
* Brand
* Category
* Price
* Rating
* Stock information
* Product search
* Add to cart

---

## 📦 Product Management

The backend supports:

* Add products
* Get all products
* Update products
* Delete products

### Product API

| Method | Endpoint              | Description      |
| ------ | --------------------- | ---------------- |
| POST   | `/api/upload/product` | Add product      |
| GET    | `/api/all/product`    | Get all products |
| PUT    | `/api/product/:id`    | Update product   |
| DELETE | `/api/delete/:id`     | Delete product   |

---

## 🗂️ Categories

Category management allows users to:

* View categories
* Add categories
* Update categories
* Delete categories
* Filter products by category

---

## 🛒 Cart

Cart functionality includes:

* Add product to cart
* View cart
* Update quantity
* Remove product
* Calculate cart information

### Cart Flow

```text
Product
   ↓
Add To Cart
   ↓
Cart API
   ↓
MongoDB
   ↓
Cart Page
```

---

## 📦 Orders

Order functionality includes:

* Create an order
* View orders
* Store order information
* Display order history

### Order Flow

```text
Cart
 ↓
Place Order
 ↓
Order API
 ↓
MongoDB
 ↓
Order History
```

---

## 👤 User Management

The application includes:

* User registration
* User login
* User information storage

Authentication can be extended using **JWT (JSON Web Token)**.

---

# 🔌 API Architecture

The backend follows a basic layered architecture:

```text
Request
   ↓
Route
   ↓
Controller
   ↓
Mongoose Model
   ↓
MongoDB
   ↓
Response
```

For example:

```text
GET /api/all/product
        ↓
productRoutes.js
        ↓
getProducts()
        ↓
product.find()
        ↓
MongoDB
        ↓
JSON Response
```

---

# 🔄 Frontend Architecture

Each page has its own JavaScript file.

```text
home.html
   ↓
home.js
   ↓
Product API
```

```text
category.html
   ↓
category.js
   ↓
Category API
```

```text
cart.html
   ↓
cart.js
   ↓
Cart API
```

```text
order.html
   ↓
order.js
   ↓
Order API
```

This keeps the frontend organized and makes each feature easier to maintain.

---

# ⚙️ Backend Setup

## 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

Go into the backend:

```bash
cd E-Commerce/Backend
```

---

## 2. Install Dependencies

```bash
npm install
```

---

## 3. Configure MongoDB

Create a `.env` file inside the `Backend` folder.

```env
PORT=3000
MONGO_URI=YOUR_MONGODB_CONNECTION_STRING
```

> ⚠️ Never upload your MongoDB username, password, API keys, or other secrets to GitHub.

---

## 4. Start the Backend

```bash
npm start
```

For development with Nodemon:

```bash
npx nodemon index.js
```

The server will run on:

```text
http://localhost:3000
```

---

# 🌐 Testing the API

You can test the API using **Postman** or your browser.

### Get all products

```text
GET http://localhost:3000/api/all/product
```

### Add product

```text
POST http://localhost:3000/api/upload/product
```

Example JSON:

```json
{
    "productId": "P001",
    "name": "iPhone 15",
    "brand": "Apple",
    "category": "Mobiles",
    "price": 69999,
    "stock": 10,
    "description": "Apple smartphone",
    "rating": 4.5,
    "image": "image-url"
}
```

---

# 🖥️ Frontend Setup

Open the `Frontend` folder in Visual Studio Code.

Use **Live Server** to run:

```text
home.html
```

The frontend communicates with the backend using Axios.

```text
Frontend
    ↓
Axios
    ↓
http://localhost:3000/api
```

---

# 🔐 Security

Sensitive information should be stored using environment variables.

Example:

```env
MONGO_URI=YOUR_MONGODB_CONNECTION_STRING
```

Add `.env` to `.gitignore`:

```text
node_modules/
.env
```

Never commit:

```text
MongoDB passwords
API keys
JWT secrets
Private credentials
```

---

# 🧪 API Testing

Recommended tool:

```text
Postman
```

Use Postman to test:

* GET
* POST
* PUT
* DELETE

before connecting the frontend.

---

# 📚 What I Learned

Through this project, I practiced:

* HTML and CSS
* JavaScript DOM manipulation
* Axios
* Node.js
* Express.js
* REST APIs
* CRUD operations
* MongoDB
* Mongoose
* Routes
* Controllers
* Models
* Middleware
* CORS
* ES Modules
* Frontend and backend integration
* API testing with Postman
* Git and GitHub

---

# 🔮 Future Improvements

The project can be extended with:

* JWT authentication
* Password hashing
* Protected routes
* User-specific carts
* User-specific orders
* Product detail page
* Advanced product search
* Category filtering
* Price filtering
* Product sorting
* Pagination
* Payment gateway
* Admin dashboard
* Order status management
* Image upload
* Responsive mobile UI

---

# 🎯 Project Goal

The main goal of this project is to build a practical understanding of how a **full-stack e-commerce application** works and how the frontend, backend, APIs, and database communicate with each other.

```text
HTML / CSS / JavaScript
          ↓
        Axios
          ↓
    Express REST API
          ↓
      Controllers
          ↓
       Mongoose
          ↓
       MongoDB
```

---

# 👨‍💻 Author

**Chinnakondu Venkatasai**

Full-Stack Development Learner

### Technologies

```text
Java
JavaScript
Node.js
Express.js
MongoDB
MySQL
HTML
CSS
Python
```

---

## ⭐ If you find this project useful

Feel free to explore the source code, suggest improvements, or use the project as a learning reference.

````

### Before you push it to GitHub

One **very important** thing: your earlier `index.js` contained your MongoDB username/password directly in the connection string. **Do not upload that version to GitHub.** Put the connection string in `.env` and add `.env` to `.gitignore`.

Also, replace:

```text
YOUR_GITHUB_REPOSITORY_URL
````

with your actual repository URL after you create the GitHub repo.

This README is structured so an interviewer can quickly understand **what you built, the architecture, folder structure, APIs, technologies, setup, and what you learned**.
