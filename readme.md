```/e-newsletter
  /controllers
    user.controller.js
    news.controller.js
    subscriber.controller.js
  /models
    user.model.js
    news.model.js
    subscriber.model.js
  /routes
    user.routes.js
    news.routes.js
    subscriber.routes.js
  /services
    email.service.js
    jsAuth.js
  /config
    db.js
  /server.js
/package.json```


# E-Newsletter Project
This project is a web application designed to manage and send newsletters to subscribers. It features user registration, login, and logout functionality, as well as the ability to create, read, and delete news articles.

## Getting Started
To get started with this project, follow these steps:

Clone the repository to your local machine.
Install the required dependencies by running npm install in the project directory.
Start the server by running npm start.
Open a web browser and navigate to http://localhost:3000 to access the application.
# Features
User registration and login functionality
News article creation, reading
Subscriber management
Email newsletter sending using nodemailer
# API Endpoints
`/user/signup`: Register a new user
`/user/login`: Login an existing user
`/user/logout`: Logout the current user
`/news/createnews`: Create a new news article
`/news/`: Get all news articles
`/news/:id`: Get a news article by ID
`/sub/register`: Register a new subscriber
# Models
User: Represents a user with attributes name, email, and password
News: Represents a news article with attributes title, description, and email
Subscriber: Represents a subscriber with attribute email
# Controllers
user.controller.js: Handles user registration, login, and logout
news.controller.js: Handles news article creation, reading, and deletion
subscriber.controller.js: Handles subscriber registration
# Services
email.service.js: Handles email sending using nodemailer
jsAuth.js: Handles JSON Web Token authentication
# Database
The application uses a MongoDB database to store user, news, and subscriber data.