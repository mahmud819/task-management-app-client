import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const Register = () => {

     // const axiosHook = useAxiosHooks();
     const naviGate = useNavigate();
     const{createUser} = useContext(AuthContext);
     // console.log(createUser);
     const handleRegister = (e) => {
     e.preventDefault();
 
     const form = e.target;
     const name = form.name.value;
     const email = form.email.value;
     const password = form.password.value;
     console.log(name, email,password);
     const newUsers ={name,email}
     createUser(email,password)
     .then(res=>{
         console.log(res)
         Swal.fire({
           title: "Well Done!",
           text: "Your account is created successfuly!",
           icon: "success"
         });
         // axiosHook.post('/users',newUsers)
         // .then(res=>{
 
         //   console.log(res);
         // })
         // .catch(err=>{
         //   console.log(err);
         //         })
     })
     .catch(error=>{
         console.log(error.message);
     })
     e.target.reset();
     naviGate('/')
   };
    return (
        <div className="flex justify-center  mx-auto ">
        <div className="rounded-lg bg-gradient-to-b from-[#9fbcff]  to-[#fff] w-full max-w-lg shrink-0 shadow-2xl">
          <form onSubmit={handleRegister} className="px-4 py-4">
            <div>
                <h1 className="text-3xl fond-extrabold">Register Now</h1>
                
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">User Name</span>
              </label>
              <input
                type="text"
                name='name'
                placeholder="User Name"
                className="input input-bordered input-sm"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name='email'
                className="input input-bordered input-sm"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name='password'
                className="input input-bordered input-sm"
                required
              />
              <label className="label">
                <Link to='/login' className="label-text-alt link link-hover">
                  Have an Account? Login Now
                </Link>
              </label>
            </div>
            <div className="form-control mt-2">
              <button className="btn btn-info btn-sm">Register</button>
            </div>
          </form>
        </div>
      
    </div>
    );
};

export default Register;