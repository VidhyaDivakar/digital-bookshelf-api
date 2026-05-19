Mongoose MongoDB API Working model


This project uses a Mongoose schema to define the structure of the JSON data stored in MongoDB. The database connection is established through an Express server using a separate connection file and environment variables for security. The project is organized into modular files such as `connection.js`, `book.js`, `bookRoutes.js`, and `server.js`, following a proper MVC-style structure aligned with the lab objectives.

All REST API methods (GET, POST, PUT, DELETE) are implemented and working as expected. Data is successfully synchronized with MongoDB, reflecting real-time updates when requests are made through Postman. Proper error handling has been implemented for client-side and server-side errors (400 and 500 status codes). Sensitive files such as `node_modules` and `.env` are excluded using `.gitignore` to maintain security and best practices.

A screenshot demonstrating the DELETE endpoint functionality is attached below.

![1779227245016](image/readme/1779227245016.png)
