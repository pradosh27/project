import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes }from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <ToastContainer></ToastContainer>
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
        </Routes>

      </BrowserRouter>
      
    </div>
  );
}

export default App;
