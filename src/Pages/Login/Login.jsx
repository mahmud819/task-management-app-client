import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";

const Login = () => {
  const {userLogin,signInWithGoogle} = useContext(AuthContext);
  
  const navigate = useNavigate();
  const location = useLocation();
  // const axiosHook = useAxios();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    // const role = form.role.value.toLowerCase();
    console.log(name,email);
    userLogin(email, password)
      .then((res) => {
        // console.log(res);
        Swal.fire({
                  title: "Well Done!",
                  text: "Login successfull!",
                  icon: "success"
                });
                const user = res?.user?.email;
        console.log(res.user);
        updateProfile(user,{
          displayName: name,
        })
        .then(()=>{
          console.log('user name updated properly',name,role);
        })
        .catch(err=>{
          console.log(err,err.message);
        })
      

        e.target.reset();
        navigate(location?.state?location.state:'/')
      })
      .catch((error) => {
        console.log(error);
      });
    // console.log({email,password})
  };
  const handleSignInGoogle =()=>{
    signInWithGoogle()
    .then(result=>{
      // console.log(result);
      if(result.operationType == 'signIn'){
        Swal.fire({
          title: 'Welcome!,Welcome!',
          text: 'Login in with Google Successfuly',
          icon: 'success',
          confirmButtonText: 'Ok'
        })
      }
      navigate(location?.state?location.state:'/');
    })
    .catch(error=>{
      // console.log(error);
    })
  }
  return (
    <div className="flex justify-center  mx-auto ">
        <div className="rounded-lg bg-gradient-to-b from-[#9fbcff]  to-[#fff] w-full max-w-lg shrink-0 shadow-2xl">
          <form onSubmit={handleLogin} className="px-4 py-2">
            <div>
                <h1 className="text-3xl fond-extrabold">Login Now</h1>
                <button onClick={handleSignInGoogle} className=" btn btn-gosht btn-sm py-2 mt-1">Login With Google</button>
                <p className="mt-1 text-lg fond-bold">Or</p>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">User Name</span>
              </label>
              <input
                type="text"
                name="name"
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
                name="email"
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
                name="password"
                className="input input-bordered input-sm"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-2">
              <button className="btn btn-info btn-sm">Login</button>
            </div>
          </form>
        </div>
      
    </div>
  );
};

export default Login;
