# UniHub
Platformă web pentru organizarea activităților, workshopurilor și evenimentelor dintr-o asociație studențească.

## Data model
| Field | Type | Notes |
| :--- | :--- | :--- |
| title | text | required, max 100 chars |
| status | boolean | toggled from the list, default false (în derulare / finalizată) |
| type | fixed values | workshop, hackathon, social |
| category | relation | <Cat1>, <Cat2>, <Cat3> (future use) |
| user | relation | owner of the item (from week 11) |

Sample data used across all stages:
1. Atelier de React, active, workshop
2. Hackathon CodeSprint, done, hackathon
3. Seara de board games, active, social

## AI usage
| Tool | Details per stage |
| :--- | :--- |
| Gemini | Used for structuring CSS Grid/Flexbox and responsive design rules for stage 1. |
| Gemini | Stage 2: Used for writing immutable array functions (map, filter, reduce) and validation logic. |

## How to run
Open index.html in a browser. No build step, no server.

## Stage 1: static mockup
Static HTML and CSS interface. The project contains a semantic structure with an header, a form section, and a list of cards displaying sample data, fully styled with CSS Grid, Flexbox, variables, and a dark mode theme.

## Stage 2: data logic
Plain JavaScript, no DOM. activitati.js holds the array and the functions
that read and change it. Results are printed in the browser console (F12).

## Status
- [x] Stage 1: static mockup
- [x] Stage 2: data logic in JavaScript
- [ ] Stage 3: Vite and React project