# Stage 5: AI log 

## Tools
- Gemini

## Conversations
- https://gemini.google.com/app/c4c0579e0261fb5a?hl=ro (Help with implementing React useState local state, immutable update patterns using map and filter, and managing document dataset.theme for light/dark mode toggling)

## Key requests
### 1. Local State and Event Handling
- Asked: How do I manage the list in the App component's state and pass down handlers via props for toggling and deleting items immutably?
- Got: Using `useState`, passing `onToggle` and `onDelete` through props, and updating state using `prev.map` and `prev.filter`.
- Changed or rejected: Adapted variable names and entity fields for the UniHub student association theme.

### 2. Light and Dark Mode Toggle
- Asked: How can I implement a theme switcher button that updates the state and applies `data-theme` on the `<html>` element while respecting system preferences?
- Got: Using `document.documentElement.dataset.theme` combined with `:root[data-theme="dark"]` and `:root:not([data-theme="light"])` CSS rules.

## What I learned / what did not work
- I learned how state changes trigger re-renders, how derived values like active counters stay synchronized automatically without separate states, and how CSS variables can instantly switch themes without component re-rendering issues.