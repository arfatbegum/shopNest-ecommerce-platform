import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function PrivateRoute({ children }) {
    const authState = useSelector((state) => state.auth.user);

    const { pathname } = useLocation()

    if (authState === null) {
        return <Navigate to="/signin" state={{ path: pathname }} />;
    }

    return children;
}