import React from "react";
import Navbar from './components/Navbar';
import Feedback from './components/Feedback';
import "./App.scss";

const App = () => (
  <div className="app">
    <Navbar />
    <Feedback />
  </div>
);

export default App;