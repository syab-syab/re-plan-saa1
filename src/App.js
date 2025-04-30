import logo from './logo.svg';
import './App.css';
import HeaderBar from './components/HeaderBar';
import Main from './components/Main';

// https://www.techcourserank.com/ja/ のデザインをパクる

function App() {
  return (
    <div className="App">
      <HeaderBar />

      <Main />
    </div>
  );
}

export default App;
