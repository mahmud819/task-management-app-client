import React from "react";

const Login = () => {
  return (
    <div className="flex justify-center  mx-auto ">
        <div className="rounded-lg bg-gradient-to-b from-[#9fbcff]  to-[#fff] w-full max-w-lg shrink-0 shadow-2xl">
          <form className="px-4 py-2">
            <div>
                <h1 className="text-3xl fond-extrabold">Login Now</h1>
                <button className=" btn btn-gosht btn-sm py-2 mt-1">Login With Google</button>
                <p className="mt-1 text-lg fond-bold">Or</p>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">User Name</span>
              </label>
              <input
                type="text"
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
