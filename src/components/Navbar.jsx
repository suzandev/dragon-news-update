import React, { use } from "react";
import { Link, NavLink } from "react-router";
import userImg from "../assets/user.png";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, logout } = use(AuthContext);
  const handleLogout = () => {
    logout()
      .then(() => {
        alert("Logout successful");
      })
      .catch((error) => {
        alert("Logout failed: " + error.message);
      });
  };
  return (
    <div className="flex flex-col md:flex-row justify-between items-center  w-11/12 mx-auto ">
      <div className="">{user && user.email}</div>
      <div className="nav flex gap-5 text-accent font-semibold">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="login-btn flex items-center gap-5">
        <img
          className="w-10 rounded-full"
          src={`${user ? user.photoURL : userImg}`}
          alt="User Icon"
        />

        {user ? (
          <button
            className="btn btn-primary px-5 md:px-10"
            onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <Link className="btn btn-primary px-10" to="/auth/login">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
