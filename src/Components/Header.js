import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import  { AuthContext } from './Context/UserContext';

const Header = () => {

    const {user,logout}=useContext(AuthContext)
    console.log(user)

    const handlesignout=()=>{
        logout()
        .then((()=>{}))
        .catch((error)=>{
            console.log('error',error)
        })
    }
    return (
        <div>
               
                <div className="navbar bg-primary text-primary-content">
                <Link  className="btn btn-ghost normal-case text-xl" to="/">MyUI</Link>
                <Link  className="btn btn-ghost normal-case text-xl"  to="/home">Home</Link>
                <Link  className="btn btn-ghost normal-case text-xl"  to="/orders">Order</Link>
                <Link  className="btn btn-ghost normal-case text-xl" to="/login">Log In</Link>
                <Link  className="btn btn-ghost normal-case text-xl" to="/register">Register</Link>
                {user?.email && <span>welcome {user.email}</span>}
                {user?.email?<button onClick={handlesignout}class="btn btn-sm">Log Out</button>
                :<Link to="/login">Login</Link>
                }
                </div>
        </div>
    );
};

export default Header;