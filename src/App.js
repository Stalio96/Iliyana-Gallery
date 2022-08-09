import { Route, Routes } from 'react-router-dom';

import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Gallery from './components/Gallery';
import Contacts from './components/Contacts';
import Create from './components/Create';
import Edit from './components/Edit/Edit';
import Favorite from './components/Favorite';
import Search from './components/Search';
import Details from './components/Details';
import Login from './components/Login';
import Register from './components/Register';
import Logout from './components/Logout';

import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Header />

        <main>
          <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/gallery' element={<Gallery />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/logout' element={<Logout />} />
            <Route path='/details/:photoId' element={<Details />} />
            <Route path='/contacts' element={<Contacts />} />
            <Route path='/create' element={<Create />} />
            <Route path='/search' element={<Search />} />
            <Route path='/favorite' element={<Favorite />} />
            <Route path='/edit/:photoId' element={<Edit />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
