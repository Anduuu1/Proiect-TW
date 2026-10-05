# Stage 1: AI log

## Tools
- Gemini

## Conversations
- https://chatgpt.com/share/example-link (Ajustarea containerului în CSS Grid pentru formular și listă)

## Key requests
### 1. CSS Grid & Flexbox layout structure
- Asked: Cum pot structura un layout cu 2 coloane in care formularul sa ocupe 1 fractiune si lista 2 fractiuni, iar cardurile sa aiba elementele la extremitati?
- Got: Utilizarea `display: grid; grid-template-columns: 1fr 2fr;` pentru container și `display: flex; justify-content: space-between;` pentru carduri.
- Changed or rejected: Am adaptat clasele pentru a se potrivi cu cerințele proiectului UniHub (asociație studențească).

## What I learned / what did not work
- Am învățat cum să folosesc corect variabilele CSS în `:root` pentru a implementa facil atât tema luminoasă, cât și tema întunecată prin `@media (prefers-color-scheme: dark)`.