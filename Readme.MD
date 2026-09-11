# Kanba

Kanba is a focused kanban task board built with React and Vite. It helps you capture work, organize it by status, and move tasks through a simple workflow without requiring a backend or account.

## Features

- Create tasks with a title, description, assignee, priority, and status.
- Edit existing tasks from their task cards.
- Delete tasks with immediate toast feedback.
- Drag tasks between Todo, In-Progress, and Completed columns.
- Search tasks by title from the top navigation bar.
- Persist tasks in the browser with `localStorage`, so a refresh keeps the current board.
- Show completed-task progress on the board header.
- Responsive layout with a desktop sidebar and mobile-friendly board content.

## Tech Stack

- React 19
- Vite 8
- Tailwind CSS 4
- `@dnd-kit/core` and `@dnd-kit/sortable` for drag-and-drop interactions
- `lucide-react` for icons
- `react-hot-toast` for action feedback

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm

### Installation

From the repository root:

```bash
cd frontend
npm install
```

### Run the development server

```bash
npm run dev
```

Vite will print the local URL in the terminal, usually `http://localhost:5173`.

## Available Scripts

Run these commands from the `frontend` directory:

| Command           | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start the Vite development server.   |
| `npm run build`   | Create a production build in `dist`. |
| `npm run preview` | Serve the production build locally.  |
| `npm run lint`    | Check the source with ESLint.        |

## How It Works

### Creating and editing tasks

Select **Add Task** to open the task form. A title is required; the description and assignee are optional. New tasks default to High priority and the Todo status. Use the edit icon on a task card to update its fields.

### Moving tasks

Tasks can be dragged to another column. The board updates the task status when the drag ends, and the completed counter reflects the new status immediately.

### Searching

Enter text in the navigation search field to filter visible cards by task title. Clearing the field restores the full board.

### Persistence

The board stores its task list under the `tasks` key in browser localStorage. Data is scoped to the current browser and origin; clearing site data removes the saved tasks.

## Project Structure

```text
frontend/
├── src/
│   ├── App.jsx                 # Application shell and shared search state
│   ├── index.css               # Global styles and form styling
│   ├── App.css                 # App-level styles
│   └── components/
│       ├── AddTaskModal.jsx    # Create and edit task form
│       ├── Board.jsx            # Task state, persistence, search, and DnD context
│       ├── Column.jsx           # Board columns and task grouping
│       ├── ColumnBox.jsx        # Individual droppable column
│       ├── Navbar.jsx           # Branding and search controls
│       ├── Searchbar.jsx        # Search input
│       ├── Sidebar.jsx          # Secondary navigation
│       └── TaskCard.jsx         # Task display and card actions
├── public/                     # Static assets
├── index.html
├── package.json
└── vite.config.js
```

## Development Notes

- There is currently no server-side API or authentication layer.
- Tasks are stored as JSON in localStorage and are available only in the browser that created them.
- The root `package.json` only provides the shared icon dependency; application scripts live in `frontend/package.json`.

## License

No license has been specified for this project yet.
