import './App.css';
import Navbar from './components/Navbar';
import Contactform from './components/Contactform';
import Account from './components/Account';
import Home from './components/Home';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import NotFound from './components/NotFound';
import {ContextState} from './context/ContextState';
import Signup from './components/Signup';

function App() {
  return (
    <ContextState>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
    <Route exact path="/add" element={<Contactform/>} />
    <Route exact path="/all" element={<Account/>} />
    <Route exact path="/signup" element={<Signup/>} />
    <Route path="*" element={ <NotFound/> } />
      </Routes>
    </BrowserRouter>
    </ContextState>
  );
}

export default App;
