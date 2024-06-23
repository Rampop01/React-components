import "./App.css";
import { Routes, Route } from "react-router-dom";
import Modal from "./component/Modal";
import Accordian from "./component/Accordian";

function App() {
  return (
    <>
      <Routes>
        <Route path="/n" element={<Modal />} />
        <Route path="/" element={<Accordian />} />
      </Routes>
    </>
  );
}

export default App;
