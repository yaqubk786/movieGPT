import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import { CheckValid } from "../Utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../Utils/firebase";
import { signOut } from "firebase/auth";
import { updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../Utils/userSlice";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleBtnClick = () => {
    const emailValue = email.current.value || "";
    const passwordValue = password.current.value || "";
    const nameValue = isSignIn ? null : name.current?.value || "";
    console.log(emailValue, passwordValue, nameValue, "nameValue");

    const message = CheckValid(emailValue, passwordValue, nameValue, isSignIn);
    console.log(message);
    setErrorMsg(message);
    if (message) return;
    if (!isSignIn) {
      //sign up form
      createUserWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: nameValue,
            photoURL:
              "https://avatars.githubusercontent.com/u/88783158?v=4&size=64",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              navigate("/browse");
            })
            .catch((error) => {
              setErrorMsg("Profile update failed: " + error.message);
            });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          setErrorMsg(errorCode + " " + errorMessage);
        });
    } else {
      //sign in
      signInWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user, "signed in");
          navigate("/browse");

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + " " + errorMessage);
        });
    }
  };
  return (
    <>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/81d64f3c-9627-4741-8f74-422bf35f9f1d/web/IN-en-20241104-TRIFECTA-perspective_55263ea2-af7f-40ed-9cf0-7029a9b9baf4_large.jpg"
          alt="logo"
        />
      </div>
      <div className="flex justify-center items-center h-screen ">
        <form
          className="relative p-12 bg-black w-3/12 rounded bg-opacity-90 "
          onSubmit={(e) => e.preventDefault()}
        >
          <h1 className="font-bold text-white m-2 text-3xl mb-2">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignIn && (
            <input
              type="text"
              placeholder="Full Name"
              className="p-4 my-4 w-full rounded-md bg-gray-700 "
              ref={name}
            />
          )}
          <input
            type="text"
            placeholder="Email"
            className="p-4 my-4 w-full rounded-md bg-gray-700 "
            ref={email}
          />
          <input
            type="password"
            placeholder="Password"
            className="p-4 my-4 w-full rounded-md bg-gray-700"
            ref={password}
          />
          <p className="text-red-500">{errorMsg}</p>
          <button
            className="p-4 my-6 text-white bg-red-700 w-full rounded-md"
            onClick={handleBtnClick}
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
          <p
            className="text-white py-1 cursor-pointer"
            onClick={toggleSignInForm}
          >
            {isSignIn
              ? "New to NetFlix? Sign Up Now"
              : "Already Registered? Sign In Now"}
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
