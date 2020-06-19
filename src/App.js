import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap'
import Login from './compnent/login'
import {BrowserRouter as Router,Route,
  Switch,} from 'react-router-dom';
import Chart from './compnent/chart'




export class App extends Component {
  render() {
    return (  
  
        <Router>
          <Switch>
            <Route path="/chart" component = {Chart}/>
            <Route  exact path="/" component={Login} />
            
  
            
          </Switch>
       </Router>
      
    
    )
  }
}


export default App;
