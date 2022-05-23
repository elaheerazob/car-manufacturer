import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Shared/SignUp';
import RequireAuth from './Pages/Login/RequireAuth';
import MyOrder from './Pages/Dashboard/MyOrder';
import Dashboard from './Pages/Dashboard/Dashboard';
import Purchase from './Pages/ProtectRoude/Purchase';
import AddProduct from './Pages/Dashboard/AddProduct';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/purchase/:id" element={<RequireAuth><Purchase/></RequireAuth>} />

        <Route path="dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} >
          <Route index element={<MyOrder/>}></Route>
          <Route path='addProduct' element={<AddProduct/>}></Route>
        </Route>

        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
