import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './Context/UserContext';

const Register = () => {

    const{createUser,signingoogle}=useContext(AuthContext);

    const handlesubmit=event=>{
        event.preventDefault();
        const form=event.target;
        const name=form.name.value;
        const email=form.email.value;
        const password=form.password.value;
        console.log(email,password,name)
        createUser(email,password)
        .then(result=>()=>{
            const user=result.user;
            console.log(user)
        })
        .catch(error=>{
            console.log('error',error)
        })

    }
    const handlewithGoogle=()=>{
        signingoogle()
        .then(result=>()=>{
            const user=result.user;
            console.log(user)
        })
        .catch(error=>{
            console.log('error',error)
        })
    }




    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Please Register now!</h1>
      <p className="py-6">Log in with your email!</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    <form onSubmit={handlesubmit} className="card-body">
       
    <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text"  name="name"placeholder="name" className="input input-bordered"  required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email"  name="email"placeholder="email" className="input input-bordered"  required/>
        </div>
        
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password"placeholder="password" className="input input-bordered" required/>
          <label className="label">
            <Link to="/login" href="#" className="label-text-alt link link-hover">Allready acount? Please log in</Link>
   =
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
    </div>
  </div>
</div>
                <button onClick={handlewithGoogle}className="btn btn-active btn-secondary">Button</button>
        </div>
    );
};

export default Register;