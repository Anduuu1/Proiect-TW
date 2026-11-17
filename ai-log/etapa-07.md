# Stage 7: AI log

## Tools
- ChatGPT

## Conversations
- https://chatgpt.com/c/6afc4ab8-86d8-83eb-bb02-977f2167993b

## Key requests

### 1. Extending the API Service
- Asked: How can I extend the existing API service to support creating, updating, and deleting activities?
- Got: A shared request() function in api.js, together with createActivitate(), updateActivitate(), and deleteActivitate(), using POST, PATCH, and DELETE HTTP methods.
- Changed or rejected: Adapted the API functions to the UniHub project, using the /activitati endpoint and Romanian field names.

### 2. Creating the Controlled Form
- Asked: How can I create a form with controlled inputs for adding new activities?
- Got: A TaskForm.jsx component using useState to manage the title, priority, validation error, and submission state.
- Changed or rejected: Kept the existing UniHub design and added the available priority options: mică, medie, and mare.

### 3. Form Validation
- Asked: How can I validate the activity title and prevent invalid submissions?
- Got: Validation requiring a non-empty title with a maximum length of 100 characters. The form displays an error message when validation fails.
- Changed or rejected: Adapted the validation messages to Romanian and ensured that the form does not send an API request when the title is empty.

### 4. Connecting Form Actions to the API
- Asked: How can I connect the form and activity cards to the API while keeping the React state synchronized with the server?
- Got: POST requests for creating activities, PATCH requests for changing completion status, and DELETE requests for removing activities.
- Changed or rejected: Updated the existing App.jsx handlers to use the server responses and update the local state only after successful API operations.

### 5. Handling Errors and Pending Requests
- Asked: How can I prevent duplicate submissions and preserve form data when an API request fails?
- Got: A submission state that disables the submit button while the request is pending, displays "Se salvează...", and handles errors using try/catch.
- Changed or rejected: Preserved the entered title when the API request fails and cleared the form only after a successful submission.

### 6. Adding Testing Attributes
- Asked: How can I add the required data-testid attributes for automated testing?
- Got: Testing attributes for the form, title input, priority selector, validation error, submit button, activity cards, activity title, checkbox, delete button, empty-list message, loading state, and error state.
- Changed or rejected: Added the attributes to the existing UniHub components without changing their functionality or visual design. Also created tw.json in the repository root with the required resource and field mappings.

### 7. Testing API Operations
- Asked: How can I verify that creating, updating, and deleting activities work correctly and persist on the server?
- Got: Instructions for testing POST, PATCH, and DELETE operations, refreshing the application to verify persistence, stopping the API server to test error handling, and introducing a delay to test the submission state.
- Changed or rejected: Verified that new activities remain after refreshing, completion status changes persist, deleted activities are removed, errors are displayed when the server is unavailable, and the submit button is disabled during delayed requests.

## What I learned / what did not work

- I learned how to implement CRUD operations (Create, Read, Update, Delete) using a mock REST API and HTTP methods such as POST, PATCH, and DELETE.
- I learned how to create controlled React forms, validate user input, and manage submission states using useState.
- I learned how to handle API errors without losing the data entered by the user and how to update the interface only after successful server responses.
- I also learned how to use data-testid attributes to make React components easier to identify in automated tests.
- During testing, I initially encountered a browser DevTools restriction when pasting JavaScript into the Console. After enabling pasting, I successfully checked the testing attributes.
- All tested operations worked correctly after adapting the implementation to the existing UniHub structure.
