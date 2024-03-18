import React from 'react';
import logo from './logo.svg';
import './App.css';
import DashBoard from './Presentations/pages/Dashboard';
import SideBar from './Presentations/components/SideBar';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import AppLayout from './Presentations/pages/AppLayout';

function App() {

  return (
<AppLayout/>
  )
}

export default App;
