import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
  const { createUser, setUser, updateUser } = useContext(AuthContext);
  const [nameError, setNameError] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;

    if (name.length < 5) {
      setNameError("Name must be at least 5 characters long");
      return;
    } else {
      setNameError("");
    }

    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;

        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({
              ...loggedUser,
              displayName: name,
              photoURL: photo,
            });
            navigate("/");
          })
          .catch(() => {
            setUser(loggedUser);
          });

        form.reset();
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-base-200">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="text-center text-2xl font-semibold">
          Register Your Account
        </h2>

        <form className="card-body" onSubmit={handleRegister}>
          <fieldset className="fieldset">
            <label className="label">Name</label>
            <input
              name="name"
              type="text"
              className="input"
              placeholder="Name"
              required
            />
            {nameError && <p className="text-red-600 text-xs">{nameError}</p>}

            <label className="label">Photo URL</label>
            <input
              name="photo"
              type="text"
              className="input"
              placeholder="Photo URL"
              required
            />

            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
              required
            />

            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Password"
              required
            />

            {error && <p className="text-red-600 text-xs">{error}</p>}

            <button type="submit" className="btn btn-neutral mt-4">
              Register
            </button>

            <p className="text-center mt-4">
              Already have an account?{" "}
              <Link
                className="link link-hover font-semibold text-secondary"
                to="/auth/login">
                Login
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Register;
