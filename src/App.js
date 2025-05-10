import logo from './logo.svg';
import './App.css';
import HeaderBar from './components/HeaderBar';
import Main from './components/Main';
import { Article } from './components/Article';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

// https://www.techcourserank.com/ja/ のデザインをパクる

function App() {
  return (
    <div className="App">
      <HeaderBar />
        <BrowserRouter>

            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/article" element={<Article />} />
              <Route path="*" element={<h1>Not Found Page</h1>} />
            </Routes>          

        </BrowserRouter>

    </div>
  );
}

export default App;
