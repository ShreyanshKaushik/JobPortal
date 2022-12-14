import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Signup from './Components/Signup/Signup';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import JobPage from './Components/JobPage/JobPage';
import ForgetPwd from './Components/ForgetPwd/ForgetPwd';

function App() {
  return (
    <div className="app">
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="register" element={<Signup />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path='/forgetPwd' element={<ForgetPwd />}></Route>
        <Route path="jobPage" element={<JobPage />}></Route>
      </Routes> 
    </BrowserRouter>
    </div>
  );
}

export default App;
