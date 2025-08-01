# 💼 HireHub – Full Stack Job Portal Platform

**HireHub** is a full-stack job portal platform where job seekers can explore and apply for jobs, and recruiters can post and manage job listings. It features role-based authentication, resume submission, and email notifications — all built with modern technologies like **React**, **Node.js**, **Express**, and **MySQL**.

---

## 🚀 Features

### 👨‍💻 For Job Seekers
- Browse all available jobs
- View detailed job descriptions
- Apply for jobs with resume upload
- Track status of applied jobs
- Receive email updates on application status

### 🧑‍💼 For Recruiters
- Post new job listings
- View, update, and delete posted jobs
- View list of applicants for each job
- Change application status (e.g., Selected, Rejected)
- Email notifications sent automatically via **NodeMailer**

### 🔐 Authentication
- Secure JWT-based login/logout
- Separate dashboards for **Recruiter** and **Job Seeker**
- Protected routes based on user role

---

## 🛠 Tech Stack

| Frontend        | Backend             | Database | Styling        | Others             |
|------------------|----------------------|----------|----------------|--------------------|
| React.js         | Node.js + Express.js | MySQL    | Tailwind CSS   | NodeMailer, JWT    |
| React Router DOM | Axios                |          |                | Multer (File Upload)|

---

## 🗂 Project Structure

git clone https://github.com/sourav030/Hire-Hub.git
cd Hire-Hub

cd server
npm install
# Create a `.env` file with the following:
# DB_HOST=
# DB_USER=
# DB_PASSWORD=
# DB_NAME=
# JWT_SECRET=
# EMAIL_USER=
# EMAIL_PASS=
npm start

cd client
npm install
npm start
