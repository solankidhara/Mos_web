import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = (props) => {
      
      if (!props.login) {
            return <Navigate to="/signin" />;
      }

      return <Outlet />;
};

export default PrivateRoute;
