import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import Counter from './components/Counter';
import Login from './components/Login';
import ListDigimon from './components/ListDigimon';

function App() {
  return (
    <div>
      <Button buttonText="Home" />
      <Button buttonText="About" />
      <Button buttonText="Contact" />
      <br />

      <Counter />

      <Login />

      <ListDigimon />

    </div>
  );
}

export default App;
