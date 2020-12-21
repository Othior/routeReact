import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link, useHistory } from "react-router-dom";
import logo from './logo.svg';
import Test from "./components/Test";
import Redirect from "./components/Redirect";
import Show from "./components/Show";
import './App.css';

function App() {
  // const history = useHistory();
  // history.push("/test")
  return (
    <div className="App">
      <Router basename="/">
        <Switch>
            <Route exact path="/">

            </Route>
            {/* <Route exact path="/test" >
              <Test/>
            </Route>
            <Route exact path="/show">
              <Show/>
            </Route>
            <Route exact path="/redirect" >
              <Redirect/>
            </Route> */}
            <Route exact path="/redirect" component={Redirect}/>
            <Route exact path="/test" component={Test}/>
            <Route exact path="/show" component={Show}/>
            
        </Switch>
      </Router>
    </div>
  );
}

export default App;
