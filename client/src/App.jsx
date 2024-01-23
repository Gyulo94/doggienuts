import "./App.css";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact/Contact";
import Sending from "./components/Sending/Sending";
import Main from "./pages/Main/Main";
// import Header from "./components/Header/Header";

function App() {
  const [sending, setSending] = useState(false);
  return (
    <div>
      {/* <Header /> */}
      <Sending sending={sending} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/contact" element={<Contact setSending={setSending} />} />
      </Routes>
    </div>
  );
}

export default App;
