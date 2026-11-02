# Stage 6: AI log

## Tools
- ChatGPT

## Conversations
- https://chatgpt.com/c/6ae86a7c-58dc-83ed-b0a2-3007ec3cb9bd 
## Key requests

### 1. Setting up a Mock REST API
- Asked: How can I install and configure json-server to serve the activities stored in a local JSON file?
- Got: Instructions for installing json-server@0.17.4, creating db.json with sample activities, and configuring an API script in package.json.
- Changed or rejected: Adapted the database structure to the UniHub project, using the activitati endpoint and Romanian field names.

### 2. Creating the API Service
- Asked: How can I separate API requests from the React components and configure the API URL using an environment variable?
- Got: A separate api.js file containing the fetchActivitati() function, using fetch() and import.meta.env.VITE_API_URL. Also created .env.example.
- Changed or rejected: Kept the API endpoint configurable while maintaining localhost:3001 as the default URL.

### 3. Loading Data with useEffect
- Asked: How can I load activities from the API when the App component mounts?
- Got: Using useEffect with an asynchronous function to fetch the activities and update the component state.
- Changed or rejected: Replaced the hardcoded initial activities with data retrieved from the API, while keeping the existing component structure and UniHub design.

### 4. Loading and Error States
- Asked: How can I display a loading message while the API request is pending and an error message if the request fails?
- Got: Using loading and error states with useState, try/catch/finally, and conditional rendering.
- Changed or rejected: Adapted the messages and CSS styling to match the existing UniHub interface.

### 5. Testing the API Integration
- Asked: How can I verify that the API works correctly and that the application handles loading and server errors?
- Got: Instructions for testing the /activitati endpoint, stopping the API server to trigger an error, and using a request delay to observe the loading state.
- Changed or rejected: Verified that the API returned all 5 activities and that the React application loaded them successfully.

## What I learned / what did not work

- I learned how to create and use a mock REST API with json-server, how to retrieve data using fetch(), and how useEffect can load data when a React component mounts.
- I learned how to separate API logic from UI components, configure environment variables, and handle asynchronous loading and error states.
- I also learned that local changes made through toggle and delete are not automatically saved to the server. These operations will require additional API requests in a future stage.

