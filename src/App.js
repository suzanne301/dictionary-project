import logo from "./logo.jpg"
import './App.css';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img 
      src={logo}
      alt='logo'
      className="img-fluid App-logo" 
      />
      </header>
    </div>
  );
}