import { useState } from 'react'
import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import './App.css'
import { AuthContext } from './context/UContext'
import Login from './pages/Login';
import Page404 from './pages/Page404';
import Profile from './pages/Profile';
import Admin from './pages/Admin';
import ProtectedRoutes from './routes/ProtectedRoutes'


function App() {
  const { currentUser } = useContext(AuthContext);


  return (
    <>
   
    <Routes>
      <Route 
        path="/" 
        element={
          currentUser 
            ? <Navigate to="/profile" />
            : <Login />
        } 
      />

     
      <Route
        path="/profile"
        element={
          <ProtectedRoutes>
            <Profile />
          </ProtectedRoutes>
        }
      />

      <Route
        path="/admin"
        element={
          <ProtectedRoutes role="admin">
            <Admin />
          </ProtectedRoutes>
        }
      />

      <Route path="*" element={<Page404 />} />
    </Routes>
    </>
  );
}

export default App
