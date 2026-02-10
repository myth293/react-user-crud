# React User Management CRUD App

A React + TypeScript CRUD application to manage user data, built with Ant Design. The app is fully responsive, uses axios to interact with an API (or JSON-server for mock testing), and is designed for easy extensibility.

---

## Live Deployment

https://myth293.github.io/react-user-crud/

> The application is connected to an online MockAPI backend.
> No local setup or server is required to use the live app.
> CRUD operations work directly from the deployed link.

## Setup Instructions

1. Clone the repo:

```bash
git clone https://github.com/myth293/react-user-crud.git
cd user-crud
```

2. Install dependencies:

```bash
npm install
```

3. Start the app:

```bash
npm run dev
```

Open: [http://localhost:5173]

---

## Adding New Fields

* Open `src/config/userFormSchema.ts`
* Add a new field object:

```ts
{
  name: "address",
  label: "Address",
  rules: [{ required: true, message: "Address is required" }],
}
```

The form and API integration automatically handle it.

---

## Features

* Create, Read, Update, Delete users
* Input validation and required fields
* Pagination added to the user table
* Responsive UI with horizontal table scroll for small screens
* Configuration driven form rendering for extensibility
* Axios based API integration with proper loading states

## Assumptions / Design Decisions

* API calls use Axios
* TypeScript interfaces for type safety
* Responsive layout with Ant Design Grid + media queries
* Table scrolls horizontally on small screens
* Form fields are configuration-driven for easy extensibility

---