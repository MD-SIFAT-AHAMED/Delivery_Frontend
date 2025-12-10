# 🚚 Delivery Management System – Online Parcel Delivery Platform

The Delivery Management System is a full-stack web application designed to streamline parcel deliveries with three user roles: User, Rider, and Admin.
This platform enables users to send parcels easily, while admins and riders can efficiently manage the entire delivery workflow.


> **Live Demo**:  https://profast-webapp.web.app/
> **Admin Login**  
> ✉️ Email: ` admin@gmail.com`  
> 🔑 Password: `12345Aa`

---

## 🚀 Features
### 👤 User Features

- Register & Login (JWT Authentication)
- Fill product & delivery information
- Choose Payment Method
- Cash on Delivery (COD)
- Online Payment (SSLCommerz)
- Track parcel delivery status
- View parcel history

### 🚴 Rider Features

- View assigned parcels
- Update delivery progress
- Manage completed deliveries

### 🛠️ Admin Features

- View all parcel requests
- Assign riders
- Manage users & riders
- Monitor overall delivery operations

### 🔐 Authentication & Authorization

JWT Authentication
Role Based Access Control
- User
- Rider
- Admin

### 💳 Payment Integration

- SSLCommerz Payment Gateway
- After successful payment:
- Parcel is confirmed
- Payment data stored for admin & user

🛠️ Tech Stack

| Frontend             | Backend               |
|----------------------|-----------------------|
| React.js             | Node.js               |
| React Router DOM     | Express.js            |
| Tailwind CSS         | MySQL                 |
| DaisyUI              | JWT (Json Web Token)  |
| React Icons          | SSLCommerz            |
| Firebase Auth        | REST API              |
| TanStack Query       |                       |
| Axios                |                       |

---

## 🗂️ Project Structure

```bash
src/
├── components/
├── layouts/
├── pages/
├── hooks/
├── context/
├── routes/
├── utils/
└── main.jsx

## 💻 How to Run Locally

1. **Clone the Repository**
  ```bash
  git clone https://github.com/MD-SIFAT-AHAMED/Delivery_Frontend.git
  cd Delivery_Frontend


2. **Install Dependencies**
 ```bash
  npm install


3. **Run Project**
  ```bash
  npm run dev
