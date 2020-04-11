import React, { Component } from "react";
import Navbar from "./components/Navbar";
import CourseList from "./components/CourseList";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <CourseList />
      </div>
    );
  }
}

export default App;
