# 🧩 Kanban Board Service
A collaborative task management system designed around the Kanban methodology. This project supports multiple users, projects, and tasks with real-time members assignment and role-based access.
## 🚀 Features
- 🔐 User authentication with email verification
- 🧑‍💼 Role-based project management
- 📋 Task and sub-task management
- 🧑‍🤝‍🧑 Assigning project members and managing their roles
- ⛓️ Task assignment based on member availability
## 🗂️ Project Structure
- **Users:** Can register, log in, manage their profile, and participate in projects.
- **Projects:** Created by admins and assigned to users.
- **Tasks:** Contained within projects and assigned to available members.
- **Sub-tasks:** Linked to tasks and assigned to the same member.
## API Endpoints
### 👤 User APIs
|  Method  |              Endpoint             |          Description           |
|:--------:|:---------------------------------:|:------------------------------:|
| POST     | `/api/v1.0/users/register`        | Register a new user            |
| GET      | `/api/v1.0/users/verify-email`    | Verify user email              |
| POST     | `/api/v1.0/users/resend-email`    | Resend email verification Link |
| POST     | `/api/v1.0/users/login`           | Log in a user                  |
| POST     | `/api/v1.0/users/logout`          | Log out the current user       |
| POST     | `/api/v1.0/users/refresh-token`   | Refresh access token           |
| GET      | `/api/v1.0/users/me`              | Get current user details       |
| POST     | `/api/v1.0/users/:userId`         | Update user details            |
| POST     | `/api/v1.0/users/forgot-password` | Request password reset         |
| PUT      | `/api/v1.0/users/change-password` | Change current password        |
### 🛠️ Project APIs
|  Method  |                        Endpoint                   |              Description            |
|:--------:|:-------------------------------------------------:|:-----------------------------------:|
| GET      | `/api/v1.0/projects`                              | Get all projects accessible to user |
| GET      | `/api/v1.0/projects/:projectId`                   | Get project details by ID           |
| POST     | `/api/v1.0/projects`                              | Create a new project                |
| PUT      | `/api/v1.0/projects/:projectId`                   | Update a project                    |
| DELETE   | `/api/v1.0/projects/:projectId`                   | Delete a project                    |
| POST     | `/api/v1.0/projects/:projectId/members`           | Add member(s) to a project          |
| GET      | `/api/v1.0/projects/:projectId/members`           | List all project members            |
| PUT      | `/api/v1.0/projects/:projectId/members/:memberId` | Update project member's role        |
| DELETE   | `/api/v1.0/projects/:projectId/members/:memberId` | Remove a project member             |
## 📌 Coming Soon
- 🧱 Task Management APIs (CRUD, assignment)
- 📊 Dashboard & Analytics
## 📦 Tech Stack
- **Backend:** Node.js, Express.js
- **Authentication:** JWT, Email Verification
- **Database:** MongoDB
- **Frontend:** [To be added later]
## 🛠️ Setup Instructions
```bash
# Clone the repository
git clone https://github.com/Ayushya100/kanban-board-svc.git
cd kanban-board

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Then configure your .env file

# Run the server
npm run start