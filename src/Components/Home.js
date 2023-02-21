import React, { useContext } from 'react';
import { AuthContext } from './Context/UserContext';

const Home = () => {
    const {user}=useContext(AuthContext);

    return (
        <div>
            <h1>This is home!</h1>
            {user?.displayName && <span>This is {user.displayName} home!</span>}
        </div>
    );
};

export default Home;