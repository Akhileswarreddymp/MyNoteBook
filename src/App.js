import "./App.css";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NoteState from "./context/NoteState";
import Alert from "./components/Alert";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { useState } from "react";

function App() {
  const [alert,setAlert] = useState()
  function showAlert(message,type){
    setAlert({
      message : message,
      value : type
    })
    setTimeout(()=>{
      setAlert(null)
    },2000)}

  return (
    <>
      <NoteState>
        <Router>
          <div className="fixed-top">
          <NavBar />
          <Alert alert = {alert} />
          </div>
          
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Home alert={showAlert} />}></Route>
              <Route exact path="/about" element={<About />}></Route>
              <Route exact path="/login" element={<Login alert={showAlert} />}></Route>
              <Route exact path="/signUp" element={<SignUp alert={showAlert} />}></Route>
            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
