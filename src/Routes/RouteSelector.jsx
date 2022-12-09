import HomePage from '../Pages/Index';
import About from '../Pages/ImagePage';
import { Navigate, Route, Routes } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import SignIn from '../Pages/SignIn';
import SignUp from '../Pages/SignUp';
import Page3D from '../Pages/3D';
import Policies from '../Pages/Policies';
import Search from '../Pages/Search';
import Pricing from '../Pages/Pricing';
import Frame from '../Pages/Frame';
import Admin from '../Admin/Layout';
import Dashboard from '../Admin/Page/Dashboard';

const IfLogin = () => {
      return <Navigate to={'/'} />;
};
function RouteSelector() {
      const isLogged = false;

      return (
            <Routes>
                  {/* <Route element={<PrivateRoute login={isLogged} />}> */}
                        <Route path="/" element={<HomePage />} />
                        {/* <Route path="/home" element={<HomePage />} /> */}
                        <Route path="/video" element={<HomePage />} />
                        <Route path="/image" element={<About />} />
                        <Route path="/3d" element={<Page3D />} />
                        <Route path="/policies" element={<Policies />} />
                        <Route path="/search" element={<Search />} />
                        <Route path="/pricing" element={<Pricing />} />
                        <Route path="/frame" element={<Frame />} />
                        <Route element={<Admin />} >
                              <Route path='/admin/dashboard' element={<Dashboard />} />
                              <Route path='/admin/test1' element={<h1>test1</h1>} />
                              <Route path='/admin/test2' element={<h1>test2</h1>} />
                        </Route>
                  {/* </Route> */}
                  <Route path="/signin" element={!isLogged ? <SignIn /> : <IfLogin />} />
                  <Route path="/signup" element={!isLogged ? <SignUp /> : <IfLogin />} />
            </Routes>
      );
}

export default RouteSelector;
