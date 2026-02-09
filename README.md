# React User Management CRUD App

A React + TypeScript CRUD application to manage user data, built with Ant Design. The app is fully responsive, uses axios to interact with an API (or JSON-server for mock testing), and is designed for easy extensibility.

---

## Setup Instructions

1. Clone the repo:

```bash
git clone <your-repo-url>
cd user-crud
```

2. Install dependencies:

```bash
npm install
```

3. Start mock API (JSON-server):

```bash
npx json-server --watch db.json --port 4000
```

4. Start the app:

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

## Assumptions / Design Decisions

* API calls use Axios
* TypeScript interfaces for type safety
* Responsive layout with Ant Design Grid + media queries
* Table scrolls horizontally on small screens
* Form fields are configuration-driven for easy extensibility

---

## Live Deployment

[https://your-deployment-link.com](https://your-deployment-link.com)
