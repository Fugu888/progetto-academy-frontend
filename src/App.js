import { Routes, Route } from 'react-router-dom';
import './App.css';
import SearchMovie from './components/SearchMovie';
import LoginPage from './pages/LoginPage';
import LoggedHomePage from './pages/LoggedHomePage';
import RegistrationPage from './pages/RegistrationPage';

function App() {
  return (
    <>
        <Routes>
            <Route path="/" element={<LoggedHomePage/>} />
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/registration" element={<RegistrationPage/>} />
            <Route path="/find" element={<SearchMovie/>} />
        </Routes> 
    </>
  );
}

export default App;


