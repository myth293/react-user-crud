
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UsersPage from "./pages/UsersPage";
import EditUserPage from "./pages/EditUserPage";

function App() {
  return (
    <BrowserRouter basename="/react-user-crud">
      <Routes>
        <Route path="/" element={<UsersPage />} />
        <Route path="/add" element={<EditUserPage />} />
        <Route path="/edit/:id" element={<EditUserPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
