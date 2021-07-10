import React , {useRef , useState , useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import { ChatEngine} from 'react-chat-engine';
import { auth } from '../firebase';
// we check if we are getting the data from context or not
import { useAuth } from '../contexts/AuthContext';
import axios from 'axios';

const Chats = () => {
    const history = useHistory();
    // below, the user get the userdata from useAuth context
    const { user }  = useAuth();
    // console.log(user);
    const [loading , setLoading] = useState(true);

    const handleLogout = async() => {
        await auth.signOut();
        history.push('/');  //this takes the user back to login page
    }

    // to get the image of user
    const getFile = async(url) => {
        const response = await fetch(url);
        // bolbs are files(images , etc ,. that we transfer in binary format)
        const data = await response.blob();
        // File(arrayofdata , filename , filetype)
        return new File([data] , "userPhoto.jpg" , {type: 'image/jpeg' })
    }

    useEffect(() => {
        // if there is no user , we go back to login page
        if(!user){
            history.push('/');
            return;
        }

        // if there is user , we use axios get call to the chat engine
        // this gets the already created user
        axios.get('https://api.chatengine.io/users/me' , {
            headers: {
                "project-id" : "576d8e92-047c-4f16-9488-f1e2a0db6e8a",
                "user-name" : user.email ,
                "user-secret" : user.uid,
            }
        })
        .then(() => {
            setLoading(false);
        })
        // if there is no user , we create one
        .catch(() => {
            let formdata = new FormData();
            formdata.append('email' , user.email);
            formdata.append('username' , user.email);
            formdata.append('secret' , user.uid);

            getFile(user.photoURL)
                .then((avatar) => {
                    formdata.append('avatar' ,avatar, avatar.name);
// since we are creating a new user , we make call to chat-engine API
                    axios.post('https://api.chatengine.io/users' ,
                        formdata , 
                        { headers: {"private-key" : "109ac909-1a06-478a-aebc-430eba64ff19"} }
                    )
                    .then(() => setLoading(false))
                    .catch((error) => console.log(error))
                })
        })
    } , [user , history])

    if(!user || loading) return 'Loading...'

    return (
        <div className = "chats-page">
            <div className = "nav-bar">
                <div className = "logo-tab">
                    Let's Chat
                </div>

                <div className = "center-tab">
                    🔥🔥Securly Connecting!🔥🔥
                </div>

                <div onClick = { handleLogout } className = "logout-tab">
                    logout
                </div>
            </div>

            <ChatEngine
                height = "calc(100vh - 100px)"
                projectID ="576d8e92-047c-4f16-9488-f1e2a0db6e8a"
                userName = {user.email}
                userSecret = {user.uid}
            />
        </div>
    );
}

export default Chats;