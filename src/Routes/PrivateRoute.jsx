import { Navigate, Outlet } from 'react-router-dom';

export  const PrivateRoute = () => {
      const isLogged = localStorage.getItem("token") ? true : false;
      
      if (!isLogged) {
            return <Navigate to="/signin" />;
      }

      return <Outlet />;
};

