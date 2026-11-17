# Stage 8: AI log

## Tools
- ChatGPT
- React Router

## Conversations
- ChatGPT – https://chatgpt.com/c/6afc52dc-3300-83ed-ba61-03cd41dddbbf

## Key requests

### 1. Installing and Configuring React Router
- Asked: How can I install React Router and configure navigation between pages in my existing React application?
- Got: Instructions for installing `react-router-dom`, configuring `BrowserRouter` in `main.jsx`, and defining application routes in `App.jsx`.
- Changed or rejected: Adapted the routes to the UniHub project, using `/` for activities, `/activitati/:id` for activity details, `/despre` for the About page, and `*` for unknown routes.

### 2. Creating the Shared Layout
- Asked: How can I create a shared layout for the header, navigation, and footer?
- Got: A `Layout.jsx` component using `Outlet` and `NavLink` from React Router.
- Changed or rejected: Preserved the existing UniHub header, logo, volunteer progress indicator, dark/light mode, refresh button, and panda footer.

### 3. Creating the Activity Detail Page
- Asked: How can I create a detail page for each activity using its ID from the URL?
- Got: A `TaskDetaliuPage.jsx` component using `useParams` to retrieve the activity ID and display its information.
- Changed or rejected: Adapted the implementation to the existing activity model, displaying the title, ID, priority, and completion status.

### 4. Extending the API Service
- Asked: How can I retrieve a single activity from the API using its ID?
- Got: Instructions for implementing `fetchActivitate(id)` in `api.js`, using the `/activitati/:id` endpoint.
- Changed or rejected: Kept the existing shared request() function and Romanian naming conventions.

### 5. Creating Additional Pages
- Asked: How can I implement an About page and a 404 page for unknown routes?
- Got: Instructions for creating `DesprePage.jsx` and `NotFoundPage.jsx`, and connecting them to React Router.
- Changed or rejected: Used UniHub-specific descriptions and preserved the shared layout across all pages.

### 6. Implementing CSS Modules
- Asked: How can I separate component styles using CSS Modules without losing the existing application design?
- Got: Instructions for creating separate CSS Module files and importing them into their corresponding React components.
- Changed or rejected: Preserved the original UniHub colors, gradients, cards, buttons, animations, dark/light theme, volunteer indicator, and footer. Created `TaskCard.module.css`, `TaskForm.module.css`, `TaskList.module.css`, and `Layout.module.css`. Kept shared styles and color variables in `index.css`.

### 7. Preserving Testing Attributes
- Asked: How can I preserve the required data-testid attributes after implementing routing and CSS Modules?
- Got: Instructions for maintaining the existing testing attributes and adding new ones for navigation, activity details, loading, errors, and the 404 page.
- Changed or rejected: Preserved the existing UniHub testing attributes and added `item-link`, `nav`, `detail`, `detail-title`, and `not-found` where required.

### 8. Testing Navigation and Routes
- Asked: How can I verify that navigation, activity details, and unknown routes work correctly?
- Got: Instructions for testing navigation between pages, opening activity details, refreshing detail URLs, checking nonexistent activity IDs, testing unknown routes, and using the browser Back button.
- Changed or rejected: Verified that the activity detail page displays the correct information, refreshing `/activitati/1` works, `/activitati/999` displays a 404 error, unknown routes display the Not Found page, and browser navigation returns to the activity list.

## What I learned / what did not work

- I learned how to configure React Router and implement navigation between multiple pages without reloading the entire document.
- I learned how to use `useParams` to retrieve URL parameters and display the details of a specific activity.
- I learned how to organize a React application using shared layouts, individual pages, and reusable components.
- I learned how to use CSS Modules to isolate component styles while keeping shared styles in a global CSS file.
- I learned how to preserve an existing application design while reorganizing its CSS structure.
- During implementation, I encountered a TypeScript error caused by differences in uppercase and lowercase letters in the `Layout` folder path. Restarting the TypeScript server resolved the issue.
- I also checked that the application continued to work after refreshing detail pages and that nonexistent activities and unknown routes displayed the appropriate error pages.
- All tested navigation and routing operations worked correctly after adapting the implementation to the existing UniHub structure.