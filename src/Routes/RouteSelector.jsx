import HomePage from '../Pages/Index';
import Image from '../Pages/ImagePage';
import { Navigate, Route, Routes } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import SignIn from '../Pages/SignIn';
import SignUp from '../Pages/SignUp';
import Page3D from '../Pages/3D';
import Policies from '../Pages/Policies';

const IfLogin = () => {
      return <Navigate to={'/'} />;
};
function RouteSelector() {
      const isLogged = true;

      return (
            <Routes>
                  <Route element={<PrivateRoute login={isLogged} />}>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/home" element={<HomePage />} />
                        <Route path="/image" element={<Image />} />
                        <Route path="/3d" element={<Page3D />} />
                        <Route path="/policies" element={<Policies />} />
                  </Route>
                  <Route path="/signin" element={!isLogged ? <SignIn /> : <IfLogin />} />
                  <Route path="/signup" element={!isLogged ? <SignUp /> : <IfLogin />} />
            </Routes>
      );
}

export default RouteSelector;
