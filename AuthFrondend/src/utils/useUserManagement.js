import axios from "axios"
import { jwtDecode } from "jwt-decode";
import { setuserData } from "../Redux/UserSlice";
import { useDispatch } from "react-redux";

const useUserManagement = (props) => {

    const dispatch = useDispatch();

    const handleUser = async (event) => {
        event.preventDefault();

        const { username, password } = event.target.elements;

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/token/', {
                username: username.value,
                password: password.value,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.status === 200) {
                const tokenData = jwtDecode(response.data.access);
                dispatch(setuserData(tokenData));
                
            } else {
                alert('Something is wrong...');
            }
        } catch (error) {
            console.error('There was an error!', error);
        }
    };

    return handleUser;


}    

export default useUserManagement