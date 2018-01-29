import React, { Component } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Table from "./Table";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campers: []
    };
    this.getAlltime = this.getAlltime.bind(this);
    this.getRecent = this.getRecent.bind(this);
    this.getAlltime()
  }

  getAlltime() {
    const url = "https://fcctop100.herokuapp.com/api/fccusers/top/alltime";
    axios
      .get(url)
      .then(res => {
        this.setState({ campers: res.data });
      })
      .catch(e => {
        console.log(e);
      });
  }
  getRecent() {
    const url = "https://fcctop100.herokuapp.com/api/fccusers/top/recent";
    axios
      .get(url)
      .then(res => {
        this.setState({ campers: res.data });
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    return (
      <div>
        <Navbar />
        <Table
          campers={this.state.campers}
          getAll={this.getAlltime}
          getRecent={this.getRecent}
        />
      </div>
    );
  }
}

export default App;
