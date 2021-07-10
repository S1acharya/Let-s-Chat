import React from 'react';
import { useHistory } from 'react-router-dom';
import { ChatEngine} from 'react-chat-engine';
import { auth } from '../firebase';

const Chats = () => {
    const history = useHistory();

    const handleLogout = async() => {
        await auth.signOut();
        history.push('/');  //this takes the user back to login page
    }

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
                projectId ="576d8e92-047c-4f16-9488-f1e2a0db6e8a"
                userName = "."
                userSecret = "."
            />
        </div>
    );
}

export default Chats;