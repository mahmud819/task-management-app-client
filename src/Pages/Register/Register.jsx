import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="flex justify-center  mx-auto ">
        <div className="rounded-lg bg-gradient-to-b from-[#9fbcff]  to-[#fff] w-full max-w-lg shrink-0 shadow-2xl">
          <form className="px-4 py-4">
            <div>
                <h1 className="text-3xl fond-extrabold">Register Now</h1>
                
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