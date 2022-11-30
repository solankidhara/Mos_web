import HomePage from '../Pages/HomePage';
import About from '../Pages/ImagePage';
import { Navigate, Route, Routes } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import SignIn from '../Pages/SignIn';
import SignUp from '../Pages/SignUp';

const IfLogin = () => {
      return(
            <Navigate to={'/'} />
      )
}
function RouteSelector() {
      const isLogged = false;


      return (
            <Routes>
                  <Route element={<PrivateRoute login={isLogged} />}>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about" element={<About />} />
                  </Route>
                  <Route path="/signin" element={!isLogged ? <SignIn /> : <IfLogin />} />
                  <Route path="/signup" element={!isLogged ? <SignUp /> : <IfLogin />} />
            </Routes>
      );
}

export default RouteSelector;
