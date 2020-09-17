import React from 'react';
import logo from './logo.svg';
import './App.css';
import {NavBar} from './components/navBar';
import BookList from './components/bookList';
import ThemeContextProvider from './contexts/themeContext';
import ThemeToggle from './components/themeToggle';
import AuthContextProvider from './contexts/authContext';

function App() {
  return (
    <div className="App">
    <ThemeContextProvider>
      <AuthContextProvider>
      <NavBar  />
      <BookList />
      <ThemeToggle />
      </AuthContextProvider>
    </ThemeContextProvider>
    
    </div>
  );
}

export default App;
