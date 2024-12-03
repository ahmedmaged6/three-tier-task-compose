# 📝 Task Manager Application with Docker Compose 

This project is a simple task manager application designed for learning Docker Compose. It includes a **Flask backend** 🐍, a **PostgreSQL database** 🗄️, and an **NGINX-powered frontend** 🌐.

---

## **📂 Project Structure**

```
flask_docker/
├── backend
│   ├── Dockerfile
│   ├── app.py
│   ├── models.py
│   └── requirements.txt
├── docker-compose.yml
├── frontend
│   ├── Dockerfile
│   ├── app.js
│   ├── index.html
│   ├── nginx.conf
│   └── style.css
```

---

## **✨ Features**

1. **Frontend** 🌐:  
   - NGINX serves a static HTML/JavaScript app to interact with tasks.
2. **Backend** 🐍:  
   - Flask API supports task CRUD operations (Create, Read, Update, Delete).
3. **Database** 🗄️:  
   - PostgreSQL stores task data.

---

## **🔧 Prerequisites**

- 🐳 Docker  
- 🛠️ Docker Compose  

---

## **🚀 How to Run**

1. Clone the repository:  
   ```bash
   git clone https://github.com/ahmedmaged6/three-tier-task-compose.git
   cd three-tier-task-compose
   ```

2. Build and run the services:  
   ```bash
   docker-compose up --build
   ```

3. Access the application:  
   - **Frontend**: [http://localhost:8090](http://localhost:8090) 🌐  
   - **Backend API**: [http://localhost:5000](http://localhost:5000) 🐍  

4. Default database credentials (set in `docker-compose.yml`):  
   ```text
   POSTGRES_USER=user
   POSTGRES_PASSWORD=password
   POSTGRES_DB=task_manager
   ```

---

## **📢 API Endpoints**

| 🔧 Method | 🛠️ Endpoint         | 📝 Description       |
|-----------|---------------------|----------------------|
| GET       | `/tasks`            | Fetch all tasks      |
| POST      | `/tasks`            | Create a new task    |
| PUT       | `/tasks/<id>`       | Update a task        |
| DELETE    | `/tasks/<id>`       | Delete a task        |

---

## **🧹 Cleanup**

To stop and remove containers, networks, and volumes created by Docker Compose:  
```bash
docker-compose down
```

To also remove volumes:  
```bash
docker-compose down -v
```
