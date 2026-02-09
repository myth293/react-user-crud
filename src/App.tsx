import { HashRouter, Routes, Route } from "react-router-dom";
import UsersPage from "./pages/UsersPage";
import EditUserPage from "./pages/EditUserPage";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<UsersPage />} />
        <Route path="/add" element={<EditUserPage />} />
        <Route path="/edit/:id" element={<EditUserPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
