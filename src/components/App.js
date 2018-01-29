import React, { Component } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Table from "./Table";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campers: []
    };
    this.getAlltime = this.getAlltime.bind(this);
    this.getRecent = this.getRecent.bind(this);
  }

  getAlltime() {}
  getRecent() {}

  render() {
    return (
      <div>
        <Navbar />
        <Table />
      </div>
    );
  }
}

export default App;
