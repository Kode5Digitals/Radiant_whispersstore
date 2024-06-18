import { useContext, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Cartcontext from '../cartcontext';
const ProtectedRoute = ({ roles, children }) => {
  const { user,Userloading, loadUser} = useContext(Cartcontext);
  const location = useLocation();
  const navigate = useNavigate();
  
  useEffect(()=>{
    loadUser(); 
    },[])

//     if (!Userloading) {
//       if (!user) {
//         navigate("/", { state: { from: location } });
//       } else if (roles && !roles.includes(user.isAdmin ? 'admin' : 'user')) {
//         navigate("/");
//       }
//     }

//   if (Userloading|| !user || (roles && !roles.includes(user.isAdmin ? 'admin' : 'user'))) {
//     return null; 
//   }

//   return children;
// };



useEffect(() => {
  if (!Userloading) {
    if (!user) {
      navigate("/", { state: { from: location } });
    } else if (roles && !roles.includes(user.isAdmin ? 'admin' : 'user')) {
      navigate("/");
    }
  }
}, [Userloading, user, roles, location, navigate]);

if (Userloading || !user || (roles && !roles.includes(user.isAdmin ? 'admin' : 'user'))) {
  return null;
}

return children;
};
ProtectedRoute.propTypes = {
    children: PropTypes.node.isRequired,
    roles: PropTypes.arrayOf(PropTypes.string),
};

export default ProtectedRoute;


















