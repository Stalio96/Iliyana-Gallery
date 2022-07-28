import { Route, Routes } from 'react-router-dom';

import './App.css';

import Contacts from './components/Contacts';
import Create from './components/Create';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Logout from './components/Logout';
import Register from './components/Register';

function App() {
  return (
    <div className="App">
      <Header />

      <main>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/create' element={<Create />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
