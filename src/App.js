import './App.css';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './components/Home';
import AddUser from './components/AddUser';
import About from './components/About';
import UserInfo from './components/UserInfo' ;

import EditUser from './components/EditUser'

import NavBar from './components/header/NavBar';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <>
    <Router>
      <ToastContainer />
      <div>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/adduser' element={<AddUser />} />
          <Route path='/edituser/:id' element={<EditUser />} />
          <Route path='/userinfo/:id' element={<UserInfo />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </div>
    </Router>

    </>
  );
}

export default App;
