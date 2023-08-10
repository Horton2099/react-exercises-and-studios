import logo from './logo.svg';
import './App.css';
import HobbyIntroduction from './components/Introduction';

function App() {
  return (
    <div className="App">
      <h1>My Hobby: Rock Climbing</h1>
      <h2>{HobbyIntroduction()}</h2>
    </div>
  );
}

export default App;
