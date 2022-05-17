import { useContext } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import Menu from '../Menu'

const ProtectedRoute = () => {

    const { isAuthenticated } = useContext(AuthContext);
    const location = useLocation();

    return (
        <>
            <Menu />
            {
                isAuthenticated ?
                    <Outlet /> :
                    <Navigate to="/login" state={{ from: location }} />
            }
        </>
    )
}

export default ProtectedRoute