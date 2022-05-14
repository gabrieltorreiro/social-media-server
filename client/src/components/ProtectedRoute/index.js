import { Outlet } from 'react-router-dom'
import Menu from '../Menu'

const ProtectedRoute = () => {
    return (
        <>
            <Menu />
            <Outlet />
        </>
    )
}

export default ProtectedRoute