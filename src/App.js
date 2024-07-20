import logo from "./logo.jpg"
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
        className="img-fluid App-logo" 
        />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
           <small>
            This project was coded by {""}
            <a href="https://www.linkedin.com/in/suzanne-paterson-778b492b9/">Suzanne Paterson</a>, is open-sourced on {""} 
            <a href="https://github.com/suzanne301/dictionary-project">GitHub</a> and hosted on {""}
            <a href="https://dictionary-paterson.netlify.app/">Netlify</a>.
            </small>
        </footer>
      </div>
    </div>
  );
}