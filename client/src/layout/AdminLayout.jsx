import AdminNav from "../components/adminNav";
import PropTypes from 'prop-types';

const AdminDefaultlayout = ({children}) => {
    return (
        <>
        <AdminNav/>
            {children}

        </>
    )
}

AdminDefaultlayout.propTypes =  {
    children: PropTypes.node.isRequired,  
}
  
  
export default AdminDefaultlayout