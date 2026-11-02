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


## Status
- [x] Stage 1: static mockup
- [x] Stage 2: data logic in JavaScript
- [x] Stage 3: Vite and React project
- [x] Stage 4: Components rendered from data
- [x] Stage 5: Local state and events
- [x] Stage 6: Loading data from a mock API
- [ ] Stage 7: form and validation
