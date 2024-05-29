// const authorizeRoles = (...roles) => {
//     return (req, res, next) => {
//         if (!req.user || !roles.includes(req.user.isAdmin ? 'admin' : 'user')) {
//             return res.status(403).json({ message: 'Access denied' });
//         }
//         next();
//     };
// };


const authorizeRoles = (...roles) => {
    return (req, res, next) => {
        if (!req.user) {
            return res.status(403).json({ message: 'Access denied: No user information available' });
        }

        const userRole = req.user ? 'admin' : 'user';
        if (!roles.includes(userRole)) {
            return res.status(403).json({ message: 'Access denied: Insufficient permissions' });
        }

        next();
    };
};

module.exports = authorizeRoles;

