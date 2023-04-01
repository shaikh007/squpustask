import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "./Components/Create/Create";
import Read from "./Components/Read/Read";
import Update from "./Components/Update/Update";
import NavBar from "./Components/NavBar/NavBar";
// login and signup details
import SignUp from "./Components/SignUp/SignUp";
import Login from "./Components/Login/Login";
import UserDetails from "./Components/UserDetails/UserDetails";
// import ImageUpload from "./Components/ImageUpload/ImageUpload";
import { useEffect, useState } from "react";
function App() {
  const [login, setLogin] = useState("false");
  useEffect(() => {
    setLogin(window.localStorage.getItem("loggedIn"));
  }, []);
  if (login === "true") {
    return <p>Fetching</p>;
  }
  return (
    <div className="main">
      <BrowserRouter>
        <NavBar />
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={login === "true" ? <UserDetails /> : <Login />}
            />
            <Route path="/create" element={<Create />}></Route>
            <Route path="/read" element={<Read />}></Route>
            <Route path="/update" element={<Update />}></Route>
            <Route path="/sign-in" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/userDetails" element={<UserDetails />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
