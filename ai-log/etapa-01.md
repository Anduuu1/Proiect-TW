# Stage 1: AI log

## Tools
- Gemini

## Conversations
- https://gemini.google.com/u/1/app/0bfd241fa37141f5 (Ajustarea containerului în CSS Grid pentru formular și listă)

## Key requests
### 1. CSS Grid & Flexbox layout structure
- Asked: Hi! Can you help me write a CSS Grid snippet for a 2-column layout with 1fr and 2fr proportions for my university project?
- Got: display: grid;: Turns the container into a grid layout. grid-template-columns: 1fr 2fr;: Allocates the available width proportionally. The first column takes up 1 fraction (1/3) of the space, and the second column takes up 2 fractions (2/3). gap: Keeps your layout clean by adding breathing room between the columns.
- Changed or rejected: Am adaptat clasele pentru a se potrivi cu cerințele proiectului UniHub (asociație studențească).

## What I learned / what did not work
- Am învățat cum să folosesc corect variabilele CSS în `:root` pentru a implementa facil atât tema luminoasă, cât și tema întunecată prin `@media (prefers-color-scheme: dark)`.