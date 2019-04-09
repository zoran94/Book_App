import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Switch, Route } from 'react-router-dom';
import Feed from './components/main/Feed';
import Profile from "./components/main/Profile";


class App extends Component {
  render() {
    return (
      <>

        <Header />

        <div className="sticky-main">
          <Switch >
            <Route path="/user/:id" component={Profile} />
            <Route exact path="/" component={Feed} />
          </Switch>
        </div>

        <Footer />
      </>
    );
  }
}

export default App;
