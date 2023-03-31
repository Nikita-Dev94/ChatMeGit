import { useLocation, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';



const RequireAuth = ({ children }) => {
	const location = useLocation()
	const isAuth = useSelector(state => state.auth.isAuth)

	if (!isAuth) {
		return <Navigate to='/login' state={{ from: location }} />
	}
	return children
}
export default RequireAuth