import { useNavigate } from "react-router-dom";    
const ReactLogout = () => {
    //logout function
    const navigation = useNavigate()
    const logout = () => {
        localStorage.clear();
        navigation("/signin")
    }
}
 
export default ReactLogout;