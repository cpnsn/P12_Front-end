import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Employees from "./pages/Employees";
import "./App.css";

export default function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/employee-list.html' element={<Employees/>} />
    </Routes>
    </>
  );
}
