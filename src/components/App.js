// import './App.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// react-router-dom is a library which allows to make multi page application using react

// import { AuthProvider } from "../contexts/AuthContext"

// import Chats from "./Chats"
import Login from "./Login"

function App() {
  return (
    <div style={{ fontFamily: 'Avenir' }}>
    <h1>hello</h1>
      <Router>
        {/* <AuthProvider> */}  \\it will wrap everything coming react context API
          <Switch>
            {/* <Route path="/chats" component={Chats} /> */}
            <Route path="/" component={Login} /> 
          </Switch>
        {/* </AuthProvider> */} 
      </Router>
    </div>
  )
}

export default App;