import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = (props) => {
      console.log(props.login);

      if (!props.login) {
            return <Navigate to="/signin" />;
      }

      return <Outlet />;
};

export default PrivateRoute;
