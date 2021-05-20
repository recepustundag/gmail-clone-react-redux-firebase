import React from "react";
import { useDispatch } from "react-redux";

import LockIcon from "@material-ui/icons/Lock";
import logo from "../assets/img/logo.png";
import { auth, provider } from "../firebase";
import { login } from "../features/user/userSlice";

const Login = () => {
  const dispatch = useDispatch();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then(({ user }) => {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
          })
        );
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12">
      <div className="max-w-xs w-full space-y-8">
        <div>
          <img className="mx-auto h-20 w-auto" src={logo} alt="Workflow" />
        </div>
        <div>
          <button
            type="submit"
            onClick={signIn}
            className="
            group
            relative
            w-full
            flex
            justify-center
            py-2
            px-4
            border border-transparent
            text-sm
            font-medium
            rounded-md
            text-white
            bg-indigo-600
            hover:bg-indigo-700
            focus:outline-none
            focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
          "
          >
            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
              <LockIcon style={{ color: "white" }} />
            </span>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
