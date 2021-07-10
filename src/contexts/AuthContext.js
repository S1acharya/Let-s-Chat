import React , {useContext , useState , useEffect} from 'react'; //benifits of hooks
import {useHistory} from 'react-router-dom';
import { auth } from '../firebase';

// let's create our context now
const AuthContext = React.createContext();
// now export our context using a function
export const useAuth = () => useContext(AuthContext);
// create provider which manages users data and export it
export const AuthProvider = ({children}) => {  //children is the props here
    // setting few useStates
    const [loading , setLoading] = useState(true);
    const [user , setUser] = useState(null);
    const history = useHistory();

    // useEffect is a function that accepts another callback function as it's parameter and dependency array/list as it's second parameter
    // we will call useEffect only when user object changes and history object changes
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            setUser(user);
            setLoading(false);
            if(user) history.push('/chats');            //this will renavigate us to our chat application
        })
    } , [user , history]);              //when thing that we mentioned in dependency array/list changes , then whole callbackfunction gets called

    // whenver we work with authContext , we need to have one value object
    const value = {user};

    // return some JSX
    return (
        /* if not loading then show the children*/
        <AuthContext.Provider value = {value}>
            {!loading && children}       
        </AuthContext.Provider>
    );
}