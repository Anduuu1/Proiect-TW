# Stage 2: AI log

## Tools
- Gemini

## Conversations
- https://gemini.google.com/u/1/app/b52e3266dc5d1222/ (Help with immutable array methods like map, filter, and reduce for managing the student association items)

## Key requests
### 1. Immutable array operations and validation
- Asked: How can I implement an immutable add function that calculates the next ID using reduce and validates parameters without modifying the original array?
- Got: Validate inputs, use reduce to find the highest existing ID plus one, and return a brand-new array using the spread operator with the new item.  
- Changed or rejected: Adapted variable names (`activitati`, `TIPURI`, `numaraInDerulare`) to match the student association theme (UniHub).

## What I learned / what did not work
- I learned how immutability works in JavaScript using spread operators and array methods (`map`, `filter`, `reduce`), which are crucial for React state management in later stages.