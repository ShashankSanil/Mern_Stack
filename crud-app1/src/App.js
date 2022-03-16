import AllUsers from "./Component/AllUsers";
import AddUser from "./Component/AddUser";
import NavBar from "./Component/NavBar";
import HomePage from "./Component/HomePage";
import NotFound from "./Component/NotFound";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EditUser from "./Component/EditUser";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/add" element={<AddUser />} />
        <Route exact path="/all" element={<AllUsers />} />
        <Route exact path="/edit/:id" element={<EditUser />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
