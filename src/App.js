import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Post from './Pages/Post/Post';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div >
     
     <BrowserRouter>
       <Navbar />
          <div className="appWrapper">
            <Routes>
            <Route path="/" element={<Home />}></Route>
              <Route path="/createpost" element={<Post />}></Route>
             
            </Routes>
          </div>
        </BrowserRouter>
     
    </div>
  );
}

export default App;
