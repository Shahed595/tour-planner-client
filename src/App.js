import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login/Login';
import Register from './pages/Login/Register/Register';
import AuthProvider from './pages/contexts/AuthProvider/AuthProvider';
import Appointment from './pages/Appointment/Appointment/Appointment';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/appointment" element={<Appointment/>} />
      </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
