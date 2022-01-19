import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import AddUser from "./pages/addUser/AddUser";
import Login from "./pages/Login/Login";
import User from "./pages/user/User";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/users" element={<User />} />
        <Route path="/add-user" element={<AddUser />} />
      </Routes>
    </Router>
  );
}

export default App;
