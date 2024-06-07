// ProtectedRoute.js
import { useContext, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Cartcontext from '../cartcontext';
const ProtectedRoute = ({ roles, children }) => {
  const { user,Userloading} = useContext(Cartcontext);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!Userloading) {
      if (!user) {
        navigate("/", { state: { from: location } });
      } else if (roles && !roles.includes(user.isAdmin ? 'admin' : 'user')) {
        navigate("/");
      }
    }
  }, [user, roles, location, navigate, Userloading]);

  if (Userloading|| !user || (roles && !roles.includes(user.isAdmin ? 'admin' : 'user'))) {
    return null; 
  }

  return children;
};
ProtectedRoute.propTypes = {
    children: PropTypes.node.isRequired,
    roles: PropTypes.arrayOf(PropTypes.string),
};

export default ProtectedRoute;






















// import {  useLocation, useNavigate } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import { useContext, useEffect } from 'react';
// import Cartcontext from '../cartcontext';

// const ProtectedRoute = ({ children, roles }) => {
//   const { user } = useContext(Cartcontext);
//   const location = useLocation();
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!user) {
//       navigate("/", { state: { from: location } });
//     } else if (roles && !roles.includes(user.isAdmin ? 'admin' : 'user')) {
//       navigate("/");
//     }
//   }, [user, roles, location, navigate]);

//   if (!user || (roles && !roles.includes(user.isAdmin ? 'admin' : 'user'))) {
//     return null; // Return null until the redirection happens
//   }

//   return children;
// };

// ProtectedRoute.propTypes = {
//     children: PropTypes.node.isRequired,
//     roles: PropTypes.arrayOf(PropTypes.string),
// };

// export default ProtectedRoute;





// import  { useContext, useEffect } from 'react';
// import PropTypes from 'prop-types';
// import { useNavigate, useLocation } from 'react-router-dom';
// import Cartcontext from '../cartcontext';

// const ProtectedRoute = ({ children, roles }) => {
//   const { user } = useContext(Cartcontext);
//   const navigate = useNavigate();
//   const location = useLocation();

//   useEffect(() => {
//     if (!user) {
//       navigate("/login", { state: { from: location } });
//     } else if (roles && !roles.includes(user.isAdmin ? 'admin' : 'user')) {
//       navigate("/adminHome");
//     }
//   }, [user, roles, navigate, location]);

//   if (!user || (roles && !roles.includes(user.isAdmin ? 'admin' : 'user'))) {
//     return null;
//   }

//   return children;
// };

// ProtectedRoute.propTypes = {
//   children: PropTypes.node.isRequired,
//   roles: PropTypes.arrayOf(PropTypes.string),
// };

// export default ProtectedRoute;
