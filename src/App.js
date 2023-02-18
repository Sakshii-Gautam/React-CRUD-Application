import { Routes, Route } from 'react-router-dom';
import AddUser from './pages/AddUser';
import EditUser from './pages/EditUser';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/addUser' element={<AddUser />} />
        <Route exact path='/editUser/:id' element={<EditUser />} />
      </Routes>
    </div>
  );
}

export default App;
