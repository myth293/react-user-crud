# React User Management CRUD App

A React + TypeScript CRUD application to manage user data, built with Ant Design. The app is fully responsive, uses axios to interact with an API (or JSON-server for mock testing), and is designed for easy extensibility.

---

## Live Deployment

https://myth293.github.io/react-user-crud/

> Note: The live deployment currently relies on a local JSON server for data.  
> Without running `npm run server`, the app will not load any data and will appear stuck loading.  
> To use full CRUD functionality, either run the local JSON server:
>
> ```bash
> npm run server
> ```
>
> **Or** connect the app to a proper backend API instead of the local JSON server.

---

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