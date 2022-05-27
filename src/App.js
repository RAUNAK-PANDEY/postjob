import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div >
     
     <BrowserRouter>
       <Navbar />
          <div className="appWrapper">
            <Routes>
              <Route exact path="/" component={Home} />
             
             
            </Routes>
          </div>
        </BrowserRouter>
     <Home />
    </div>
  );
}

export default App;
