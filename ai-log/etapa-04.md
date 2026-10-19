# Stage 4: AI log

## Tools
- Gemini

## Conversations
- https://gemini.google.com/app/c4c49b0d4653da69?hl=ro (Ajutor pentru împărțirea interfeței în componente React, transmiterea datelor prin props, randarea listelor cu map și key, și randare condiționată)

## Key requests
### 1. Împărțirea în componente și transmiterea datelor prin props
- Asked: Cum împart interfața în componente separate (`TaskCard` / `TaskList`) și cum transmit datele prin props din `App.jsx`?
- Got: Instrucțiuni pas cu pas pentru crearea folderului `components/`, scrierea fișierelor dedicate și destructurarea corectă a props-urilor.
- Changed or rejected: Adaptarea denumirilor componentelor și a structurii de date pentru modelul propriu al asociației studențești (UniHub / activități).

### 2. Randarea listelor și randarea condiționată
- Asked: Cum randez dinamic o listă folosind metoda `.map()` cu atributul `key` și cum implementez mesajul pentru lista goală?
- Got: Soluții pentru utilizarea `key={item.id}`, verificarea condiționată a lungimii array-ului și interpretarea avertismentelor din consola browserului.

## What I learned / what did not work
- Am învățat cum să modularizez o aplicație React prin separarea componentelor în fișiere proprii, cum funcționează fluxul de date unidirectional prin props (read-only), importanța critică a atributului `key` unic în randarea listelor pentru a evita erorile din consolă, și cum să gestionez randarea condiționată pentru cazurile speciale (listă goală).