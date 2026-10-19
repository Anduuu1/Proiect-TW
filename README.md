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

## How to run
```bash
cd frontend
npm install
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

## Status
- [x] Stage 1: static mockup
- [x] Stage 2: data logic in JavaScript
- [x] Stage 3: Vite and React project
- [x] Stage 4: components rendered from data
- [ ] Stage 5: local state and events