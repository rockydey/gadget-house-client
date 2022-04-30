import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddItem from './components/Pages/AddItem/AddItem';
import Blogs from './components/Pages/Blogs/Blogs';
import Home from './components/Pages/Home/Home';
import Inventory from './components/Pages/Inventory/Inventory';
import LogIn from './components/Pages/LogIn/LogIn';
import ManageInventories from './components/Pages/ManageInventories/ManageInventories';
import ManageItems from './components/Pages/ManageItems/ManageItems';
import MyItems from './components/Pages/MyItems/MyItems';
import NotFound from './components/Pages/NotFound/NotFound';
import Footer from './components/Pages/Shared/Footer/Footer';
import Header from './components/Pages/Shared/Header/Header';
import SignUp from './components/Pages/SignUp/SignUp';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/inventory' element={<Inventory></Inventory>}></Route>
        <Route path='/manageinventories' element={<ManageInventories></ManageInventories>}></Route>
        <Route path='/manage' element={<ManageItems></ManageItems>}></Route>
        <Route path='/additem' element={<AddItem></AddItem>}></Route>
        <Route path='/myitems' element={<MyItems></MyItems>}></Route>
        <Route path='/login' element={<LogIn></LogIn>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
