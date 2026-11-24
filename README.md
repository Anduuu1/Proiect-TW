# UniHub
Platformă web pentru organizarea activităților, workshopurilor și evenimentelor dintr-o asociație studențească.

## Data model
| Field | Type | Notes |
| :--- | :--- | :--- |
| title | text | required, max 100 chars |
| status | boolean | toggled from the list, default false (în derulare / finalizată) |
| type | fixed values | workshop, hackathon, social |
| category | relation | Cultură, Educație, Social (future use) |
| user | relation | owner of the item (from week 11) |

Sample data used across all stages:
1. Atelier de React, active, workshop
2. Hackathon CodeSprint, done, hackathon
3. Seara de board games, active, social

## AI usage
| Tool | Details per stage |
| :--- | :--- |
| Gemini | Stage 1: Used for structuring CSS Grid/Flexbox and responsive design rules. |
| Gemini | Stage 2: Used for writing immutable array functions (map, filter, reduce) and validation logic. |
| Gemini | Stage 3: Used for setting up the Vite React project, JSX syntax conversion, and cleaning boilerplate code. |
| Gemini | Stage 4: Used for structuring React components, passing data via props, dynamic list rendering using .map() and key, and conditional rendering. |
| Gemini | Stage 5: Used for implementing local state (`useState`) and immutable event handlers for toggle and delete actions. |
| ChatGPT | Stage 6: Used for configuring json-server, creating db.json, separating API requests into api.js, configuring environment variables, implementing useEffect for data fetching, and handling loading and error states. |
| ChatGPT | Stage 7: Used for implementing controlled form inputs, title validation, POST/PATCH/DELETE API requests, error handling, submission state, data-testid attributes, and testing API persistence. |
| ChatGPT | Stage 8: Used for implementing React Router navigation, activity detail pages, shared layouts, About and Not Found pages, CSS Modules, preserving data-testid attributes, and testing routes and navigation. |
| ChatGPT | Stage 9: Used for setting up a custom Node.js and Express backend, implementing the five REST API operations (GET, GET by ID, POST, PATCH, DELETE), server-side validation, CORS configuration, error handling, the `/health` endpoint, frontend integration, removing json-server, testing API requests using REST Client, and updating the project documentation. |

## How to run

Open two terminals.

Terminal 1:
```bash
cd frontend
npm install
npm run api

Terminal 2:
```bash
cd frontend
npm run dev



## Stage 1: static mockup
Static HTML and CSS interface. The project contains a semantic structure with an header, a form section, and a list of cards displaying sample data, fully styled with CSS Grid, Flexbox, variables, and a dark mode theme.

## Stage 2: data logic
Plain JavaScript, no DOM. activitati.js holds the array and the functions
that read and change it. Results are printed in the browser console (F12).

## Stage 3: Vite and React project
The app now lives in frontend/, built with Vite. The data from stage 2 moved into the main component; the list is still printed raw.

## Stage 4: components
The list is rendered from the data, through two components:
- TaskList receives the whole array and renders one card per item
- TaskCard receives a single item through props and displays it

## Stage 4: Checklist

| ID | Requirement | Where (permalink) | How to check |
|---|---|---|---|
| S4-R1 | 2+ components in src/components/ | [frontend/src/components/](https://github.com/Anduuu1/Proiect-TW/tree/main/frontend/src/components) | open folder |
| S4-R2 | card receives data through props | [TaskCard.jsx](https://github.com/Anduuu1/Proiect-TW/blob/main/frontend/src/components/TaskCard.jsx) | read |
| S4-R3 | map + key={id}, no console warnings | [TaskList.jsx](https://github.com/Anduuu1/Proiect-TW/blob/main/frontend/src/components/TaskList.jsx) | F12, Console |
| S4-R4 | message for empty list | [TaskList.jsx](https://github.com/Anduuu1/Proiect-TW/blob/main/frontend/src/components/TaskList.jsx) | set array to [] |
| S4-R5 | state changes the card look | [TaskCard.jsx](https://github.com/Anduuu1/Proiect-TW/blob/main/frontend/src/components/TaskCard.jsx) | toggle a done flag |
| S4-R6 | README Stage 4 section + AI log | [README.md](https://github.com/Anduuu1/Proiect-TW/blob/main/README.md), [ai-log/etapa-04.md](https://github.com/CONTRIBUTOR/REPOSITORY/blob/main/ai-log/etapa-04.md) | read |
| S4-R7 | commit “Stage 4” pushed | [Commit history](https://github.com/Anduuu1/Proiect-TW/commits/main) | commit history |

## Stage 4 Checklist Status
- [x] S4-R1 Există cel puțin două componente în src/components/, câte una pe fișier.
- [x] S4-R2 Cardul primește datele prin props și nu citește array-ul direct.
- [x] S4-R3 Lista este randată cu map și key={id}, fără avertismente în consolă.
- [x] S4-R4 Lista goală afișează un mesaj.
- [x] S4-R5 Starea elementului modifică aspectul cardului.
- [x] S4-R6 README-ul este actualizat, iar ai-log/etapa-04.md este completat.
- [x] S4-R7 Commit-ul Stage 4: ... este publicat pe GitHub.

## Stage 5: local state and events
The list lives in React state. Checking and deleting work from the page, and the counters in the header follow automatically. A button in the header switches between light and dark mode. Changes are lost on refresh, which is what stage 6 and stage 10 fix.

### Stage 5 Checklist
| ID | Requirement | Where (permalink) | How to check |
| :--- | :--- | :--- | :--- |
| S5-R1 | list kept in useState, in App | [App.jsx](frontend/src/App.jsx) | read |
| S5-R2 | toggling changes state and card look | [App.jsx](frontend/src/App.jsx) / [TaskCard.jsx](frontend/src/components/TaskCard.jsx) | click a checkbox |
| S5-R3 | delete removes the item | [App.jsx](frontend/src/App.jsx) / [TaskCard.jsx](frontend/src/components/TaskCard.jsx) | click Delete |
| S5-R4 | header counter derived, not in state | [App.jsx](frontend/src/App.jsx) | toggle, watch header |
| S5-R5 | immutable updates (no push, splice, assignment) | [App.jsx](frontend/src/App.jsx) | read |
| S5-R6 | light/dark toggle: state + data-theme on html | [App.jsx](frontend/src/App.jsx) / [App.css](frontend/src/App.css) | click the button, both system themes |
| S5-R7 | no console warnings; README + AI log | [README.md](README.md) / [ai-log/etapa-05.md](ai-log/etapa-05.md) | F12, Console |
| S5-R8 | commit "Stage 5" pushed | Commit history | commit history |


## Stage 6: loading data from a mock API

The activities are now loaded from a mock REST API using json-server. The data is stored in db.json instead of being hardcoded in App.jsx.

The API requests are separated into src/api.js, where fetchActivitati() retrieves the activities from the /activitati endpoint. The API URL is configurable through the VITE_API_URL environment variable, with localhost:3001 as the default.

App.jsx uses useEffect to fetch the activities when the application loads. While the request is pending, a loading message is displayed. If the API request fails, an error message is shown.

The application still supports local toggling and deleting of activities. These changes are not yet saved to the server and are lost on refresh. Persistent updates will be implemented in a later stage.

 npm run api # terminal 1, http://localhost:3001
 npm run dev # terminal 2, http://localhost:5173

### Stage 6 Checklist

| ID | Requirement | Where (permalink) | How to check |
| :--- | :--- | :--- | :--- |
| S6-R1 | json-server installed and configured | [package.json](frontend/package.json) | run npm run api |
| S6-R2 | 5+ activities stored in db.json | [db.json](frontend/db.json) | open localhost:3001/activitati |
| S6-R3 | activities fetched using useEffect | [App.jsx](frontend/src/App.jsx) | reload the application |
| S6-R4 | loading and error states displayed | [App.jsx](frontend/src/App.jsx) / [App.css](frontend/src/App.css) | stop API and reload |
| S6-R5 | API requests separated into api.js and URL configurable through environment variables | [api.js](frontend/src/api.js) / [.env.example](frontend/.env.example) | inspect files |
| S6-R6 | README Stage 6 section and AI log updated | [README.md](README.md) / [ai-log/etapa-06.md](ai-log/etapa-06.md) | read |
| S6-R7 | commit "Stage 6" pushed | [Commit history](https://github.com/Anduuu1/Proiect-TW/commits/main) | commit history |

### Stage 6 Checklist Status

- [x] S6-R1 json-server is installed and configured.
- [x] S6-R2 At least 5 activities are stored in db.json.
- [x] S6-R3 Activities are fetched using useEffect.
- [x] S6-R4 Loading and error messages are displayed.
- [x] S6-R5 API requests are separated into api.js and the URL is configurable.
- [x] S6-R6 README and AI log are updated.
- [x] S6-R7 Commit "Stage 6" is published on GitHub.


## Stage 7: form and validation

The application now supports creating, updating, and deleting activities through the mock REST API.

A controlled form allows users to add activities by entering a title and selecting a priority (small, medium, or high). The title is required and limited to 100 characters. Validation errors are displayed directly in the form.

All API requests are handled in src/api.js through a shared request() function. The application uses POST to create activities, PATCH to update their completion status, and DELETE to remove them.

The interface updates only after the server confirms the operation. If a request fails, an error message is displayed and the form preserves the entered text. The submit button is disabled while a request is pending to prevent duplicate submissions.

Data-testid attributes were added to the form, activity cards, loading state, error state, and empty-list message to support automated testing.

### Stage 7 Checklist

| ID | Requirement | Where (permalink) | How to check |
| :--- | :--- | :--- | :--- |
| S7-R1 | Controlled form with title and priority | [TaskForm.jsx](frontend/src/components/TaskForm.jsx) | inspect form |
| S7-R2 | Required title and maximum 100 characters | [TaskForm.jsx](frontend/src/components/TaskForm.jsx) | submit empty title / enter long title |
| S7-R3 | Shared API request function and POST/PATCH/DELETE | [api.js](frontend/src/api.js) | inspect API functions |
| S7-R4 | New activities are saved through POST | [App.jsx](frontend/src/App.jsx) / [api.js](frontend/src/api.js) | add an activity and refresh |
| S7-R5 | Toggle and delete operations persist on the server | [App.jsx](frontend/src/App.jsx) / [api.js](frontend/src/api.js) | toggle/delete and refresh |
| S7-R6 | Errors preserve form input and pending requests disable submit | [TaskForm.jsx](frontend/src/components/TaskForm.jsx) | stop API / test delayed API |
| S7-R7 | Required data-testid attributes are present | [TaskForm.jsx](frontend/src/components/TaskForm.jsx), [TaskCard.jsx](frontend/src/components/TaskCard.jsx), [TaskList.jsx](frontend/src/components/TaskList.jsx), [App.jsx](frontend/src/App.jsx) | inspect elements in browser Console |
| S7-R8 | README Stage 7 section and AI log updated | [README.md](README.md) / [ai-log/etapa-07.md](ai-log/etapa-07.md) | read |
| S7-R9 | Commit "Stage 7" pushed | [Commit history](https://github.com/Anduuu1/Proiect-TW/commits/main) | commit history |

### Stage 7 Checklist Status

- [x] S7-R1 Controlled form with title and priority.
- [x] S7-R2 Required title and maximum 100 characters.
- [x] S7-R3 Shared API request function and POST/PATCH/DELETE.
- [x] S7-R4 New activities are saved through POST.
- [x] S7-R5 Toggle and delete operations persist on the server.
- [x] S7-R6 Errors preserve form input and pending requests disable submit.
- [x] S7-R7 Required data-testid attributes are present.
- [x] S7-R8 README and AI log updated.
- [x] S7-R9 Commit "Stage 7" pushed.


## Stage 8: Routing and Component Styling

### Implementation

- Installed and configured React Router for navigation between pages without reloading the document.
- Created the home page for displaying activities.
- Implemented a detail page for each activity, using the ID from the URL.
- Added the About page and the 404 page for unknown routes.
- Created the Layout component for shared elements: header, navigation and footer.
- Preserved the dark/light theme and the volunteer progress indicator.
- Separated component styles using CSS Modules.
- Kept global styles in `index.css`.
- Preserved the `data-testid` attributes required for testing.

### Routes

| Route | Page |
|---|---|
| `/` | Activities list |
| `/activitati/:id` | Activity details |
| `/despre` | About UniHub |
| `*` | 404 page |

### CSS Modules

- `TaskCard.module.css`
- `TaskForm.module.css`
- `TaskList.module.css`
- `Layout.module.css`

### Testing

- [x] Navigation between pages works without a page refresh.
- [x] Clicking an activity title opens its detail page.
- [x] Refreshing the detail page works correctly.
- [x] An invalid activity ID displays an error.
- [x] Unknown routes display the 404 page.
- [x] Browser Back navigation works.
- [x] CSS Modules are used for component styling.
- [x] The required `data-testid` attributes are preserved.

## Stage 9: Own Backend with Express

### Implementation

- Created a separate backend using Node.js and Express.
- Implemented the REST API for activities.
- Added the five required operations: GET all, GET by ID, POST, PATCH and DELETE.
- Implemented server-side validation for activity data.
- Added appropriate HTTP status codes and error handling.
- Configured CORS to allow requests from the frontend.
- Added the `/health` endpoint to check server availability.
- Separated the Express application (`app.js`) from the server startup file (`server.js`).

### Data Storage

Activity data is currently stored in memory on the backend. The data is reset when the backend server is restarted. Database integration will be implemented in Stage 10.

### How to Run

**Backend:**

```bash
cd backend
npm install
npm run dev
```

The backend runs at `http://localhost:3001`.

**Frontend:**

```bash
cd frontend
npm install
npm run dev
```

The frontend runs at `http://localhost:5173`.

Health check: `http://localhost:3001/health`

### Testing

- [x] All five REST operations were tested using the REST Client extension.
- [x] Creating an activity returns HTTP 201.
- [x] Updating an activity works correctly.
- [x] Deleting an activity returns HTTP 204.
- [x] Requesting a nonexistent activity returns HTTP 404.
- [x] Submitting an empty title returns HTTP 400 with an error message.
- [x] The frontend communicates with the Express backend.
- [x] CORS allows requests from the frontend.
- [x] Removed `json-server`, its npm script and `frontend/db.json`.

## Status

- [x] Stage 1: static mockup
- [x] Stage 2: data logic in JavaScript
- [x] Stage 3: Vite and React project
- [x] Stage 4: components rendered from data
- [x] Stage 5: local state and events
- [x] Stage 6: loading data from a mock API
- [x] Stage 7: form and validation
- [x] Stage 8: routing and detail page
- [x] Stage 9: own backend with Express
- [ ] Stage 10: MariaDB and full CRUD