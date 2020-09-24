import React from 'react';
import logo from './logo.svg';
import TreatmentForm from './components/TreatmentForm';
import Profile from './components/Profile';
import Login from './components/Login';
import Register from './components/Register';
import './App.css';
import { PrivateRoute } from './components/PrivateRoute';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
      <PrivateRoute exact path="/protected" component={TreatmentForm} />
      <Route path="/profile/:id" component={Profile} />
    </>
  );
}

export default App;
