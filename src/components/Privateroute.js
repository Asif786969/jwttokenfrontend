
import {useNavigate} from "react-router-dom";
import { Outlet } from "react-router-dom";
const PrivateRoute = () => {
    // Determine if the user's role is equal to the userRole prop passed to the PrivateRoute component
    const navigate=useNavigate()
    const isAuthorized = localStorage.getItem("role") === "admin";

    
    
    return (
        isAuthorized ? <Outlet/>:navigate("/welcome")
    );

};
export default PrivateRoute;
