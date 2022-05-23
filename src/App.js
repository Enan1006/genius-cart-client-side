import './App.css';
import Header from './Pages/Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import About from './Pages/About/About';
import ServiceDetail from './Pages/ServiceDetail/ServiceDetail';
import NotFound from './Pages/NotFound/NotFound';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import ProceedCheckout from './Pages/ProceedCheckout/ProceedCheckout';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import AddService from './Pages/AddService/AddService';
import ManageServices from './Pages/ManageServices/ManageServices';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/service/:serviceId' element={<ServiceDetail />}></Route>
        <Route path='/about' element={<About />}></Route>

        <Route path='/proceed-checkout' element={<RequireAuth>
          <ProceedCheckout />
        </RequireAuth>}></Route>
        <Route path='/add-service' element={<RequireAuth>
          <AddService />
        </RequireAuth>}></Route>
        <Route path='/manage-service' element={<RequireAuth>
          <ManageServices />
        </RequireAuth>}></Route>

        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
