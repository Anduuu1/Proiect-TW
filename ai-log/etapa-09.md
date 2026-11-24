# Stage 9: AI log

## Tools
- ChatGPT
- Node.js
- Express
- REST Client (Visual Studio Code)

## Conversations
- ChatGPT – (https://chatgpt.com/c/6b058504-c0fc-83eb-ab20-2019fed4994f)

## Key requests

### 1. Setting Up the Express Backend
- Asked: How can I create a separate backend using Node.js and Express for my existing UniHub application?
- Got: Instructions for creating a separate `backend` folder, initializing the Node.js project, installing Express, and configuring the development scripts.
- Changed or rejected: Created the backend separately from the frontend and configured it to run on port `3001`.

### 2. Separating the Application and Server
- Asked: How can I organize the Express backend using separate application and server files?
- Got: Instructions for creating `app.js` to configure the Express application and `server.js` to start the server.
- Changed or rejected: Used `app.js` for middleware, routes, CORS, and error handling, while `server.js` handles server startup.

### 3. Implementing the Activities REST API
- Asked: How can I implement the five REST operations for activities using Express?
- Got: Instructions for creating routes for retrieving all activities, retrieving an activity by ID, creating, updating, and deleting activities.
- Changed or rejected: Adapted the implementation to the existing UniHub data model and Romanian naming conventions, using the `/activitati` endpoint.

### 4. Implementing Server-side Validation
- Asked: How can I validate activity data on the backend and return appropriate error messages?
- Got: Instructions for validating required fields, activity titles, priorities, and status values.
- Changed or rejected: Created `validation.js` with validation functions for activity data and ID values. Invalid requests return HTTP 400 with an error message.

### 5. Configuring CORS and Error Handling
- Asked: How can I configure CORS, implement a health check, and handle unknown routes and server errors?
- Got: Instructions for configuring CORS, adding a `/health` endpoint, handling nonexistent routes, and implementing centralized error handling.
- Changed or rejected: Allowed requests from `http://localhost:5173`, added the health check endpoint, and returned JSON error messages for invalid routes and server errors.

### 6. Connecting the React Frontend to Express
- Asked: How can I connect the existing React frontend to the new Express backend?
- Got: Instructions for updating the API service to send requests to the Express server and handle HTTP errors.
- Changed or rejected: Updated `frontend/src/api.js` while preserving the existing functions for retrieving, creating, updating, and deleting activities.

### 7. Removing json-server
- Asked: How can I replace json-server completely with the custom Express backend?
- Got: Instructions for removing the json-server dependency, its npm script, and the mock database file.
- Changed or rejected: Uninstalled `json-server`, removed the corresponding script from `frontend/package.json`, and deleted `frontend/db.json`.

### 8. Testing the REST API
- Asked: How can I test all REST operations and verify that server-side validation works correctly?
- Got: Instructions for using the REST Client extension in Visual Studio Code and preparing requests for GET, POST, PATCH, and DELETE.
- Changed or rejected: Created `test-api.http` and tested all five REST operations, including invalid requests and nonexistent activity IDs.

### 9. Debugging POST Validation
- Asked: Why does submitting an activity with an empty title return HTTP 201 instead of HTTP 400?
- Got: Help investigating the backend validation and checking which server process was handling requests.
- Changed or rejected: Stopped the running servers, checked the backend code, and restarted the correct Express server. After that, submitting an empty title correctly returned HTTP 400 with the message `Titlul este obligatoriu.`.

### 10. Updating the README
- Asked: How should I document the implementation and testing of Stage 9 in the project README?
- Got: A suggested structure covering the backend implementation, data storage, execution instructions, and testing results.
- Changed or rejected: Added the Stage 9 documentation and updated the project status to mark Stage 9 as completed.

## What I learned / what did not work

- I learned how to create and configure a custom backend using Node.js and Express.
- I learned how to organize an Express application by separating application configuration from server startup.
- I learned how to implement REST API operations using GET, POST, PATCH, and DELETE.
- I learned how to validate incoming data on the server and return appropriate HTTP status codes and error messages.
- I learned how to configure CORS so that the React frontend can communicate with the backend.
- I learned how to connect an existing React application to a custom Express API and remove json-server.
- I learned how to test API endpoints using the REST Client extension in Visual Studio Code.
- During testing, an invalid POST request initially returned HTTP 201 instead of HTTP 400. The issue was resolved after stopping the running servers and restarting the correct backend process.
- I also verified that the frontend continued to work with the Express backend and that creating, updating, and deleting activities worked correctly.
- Activity data is currently stored in memory, so it resets when the backend server is restarted. Database integration is planned for Stage 10.
- All tested API operations and frontend integration worked correctly after resolving the validation testing issue.