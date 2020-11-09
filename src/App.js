import React, { Component } from 'react';
import './App.css';
import NavigationBar from './app/Components/Navbar/Navbar';
import Footer from './app/Components/Footer/Footer';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './app/Pages/Home/Home';



class App extends Component {
  render() {
    return (
    <Router>
      <div className="App">
      <NavigationBar/>
      <Route exact path="/" component={Home} />
      <Footer />
      </div>
    </Router>
    );
  }
}

export default App;