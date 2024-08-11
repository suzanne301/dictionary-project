import logo from "./logo.jpg"
import React from "react";
import './App.css';
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img 
          src={logo}
          alt='logo'
          className="img-fluid App-logo img" 
          />
        </header>
        <main>
          <Dictionary defaultKeyword="agile" />
        </main>
        <footer className="App-footer">
           <small>
            This project was coded by {""}
            <a href="https://www.linkedin.com/in/suzanne-paterson-778b492b9/" target="_blank" rel="noopener noreferrer">Suzanne Paterson</a>, is open-sourced on {""} 
            <a href="https://github.com/suzanne301/dictionary-project" target="_blank" rel="noopener noreferrer">GitHub</a> and hosted on {""}
            <a href="https://dictionary-paterson.netlify.app/" target="_blank" rel="noopener noreferrer">Netlify</a>.
            </small>
        </footer>
      </div>
    </div>
  );
}