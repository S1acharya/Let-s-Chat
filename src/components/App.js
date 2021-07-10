// import './App.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// react-router-dom is a library which allows to make multi page application using react

import { AuthProvider } from "../contexts/AuthContext";

import Chats from "./Chats"
import Login from "./Login"

function App() {
  return (
    <div style={{ fontFamily: 'Avenir' }}>
      <Router>
        <AuthProvider>
          <Switch>
            <Route path="/chats" component={Chats} />
            <Route path="/" component={Login} /> 
          </Switch>
        </AuthProvider> 
      </Router>
    </div>
  )
}
// reactcontext is one big object that contains all data  ,in this case userdata
// and it wraps all the components , here login and chats component
// and thus Authprovider which is a react context handles the entire application state
// it will wrap everything coming from react context API
export default App;