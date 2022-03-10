import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import Counter from './components/Counter';
import Login from './components/Login';

function App() {
  return (
    <div>
      <Button buttonText="Home" />
      <Button buttonText="About" />
      <Button buttonText="Contact" />
      <br />

      <Counter />

      <Login />
    </div>
  );
}

export default App;
