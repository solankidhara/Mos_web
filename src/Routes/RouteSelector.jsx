import HomePage from '../Pages/HomePage';
import About from '../Pages/About';
import { Navigate, Route, Routes } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import SignIn from '../Pages/SignIn';

const IfLogin = () => {
      return(
            <Navigate to={'/'} />
      )
}
function RouteSelector() {
      const isLogged = true;


      return (
            <Routes>
                  <Route element={<PrivateRoute login={isLogged} />}>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about" element={<About />} />
                  </Route>
                  <Route path="/login" element={!isLogged ? <SignIn /> : <IfLogin />} />
            </Routes>
      );
}

export default RouteSelector;
