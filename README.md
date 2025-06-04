# aireact

A modern user management app built with **React 19**, **TypeScript**, and **Vite**.  
Displays a list of users fetched from a public API, allows viewing user details in a modal, and supports deleting users from the list.

## Features

- Fetches and displays users from [JSONPlaceholder](https://jsonplaceholder.typicode.com/users)
- Responsive, accessible UI with modal details view
- Delete users with confirmation and toast feedback
- TypeScript types for all user data
- Modular, component-based structure
- Modern CSS Modules for styling

## Tech Stack

- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- CSS Modules

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

```bash
cd aireact/aireact
npm install
# or
yarn install
```

### Development

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:5173](http://localhost:5173) to view the app.

### Build

```bash
npm run build
# or
yarn build
```

### Preview Production Build

```bash
npm run preview
# or
yarn preview
```

## Project Structure

```
aireact/
  aireact/
    src/
      components/      # React components
      styles/          # CSS Modules
      types/           # TypeScript types
      App.tsx          # Main app
      main.tsx         # Entry point
    index.html
    package.json
    ...
```

## License

MIT
