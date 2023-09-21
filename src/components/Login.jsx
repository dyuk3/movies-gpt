import { useEffect, useRef, useState } from "react";
import Header from "./Header";
import { validateData } from "../utils/validate";
import { auth } from '../utils/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../feature/userSlice";

const Login = () => {

  const [isSignInForm, setisSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const email = useRef();
  const password = useRef();
  const name = useRef();
  const formRef = useRef();

  useEffect(() => {
    formRef.current.reset();
  }, [isSignInForm]);

  const handleForm = (e) => {
    e.preventDefault();
    setisSignInForm(!isSignInForm);
  };

  const handleSignIn = () => {
    // validate the form data 
    const message = validateData(email.current.value, password.current.value);
    setErrorMessage(message);

    //login / signup logic
    if (message) return;

    if (!isSignInForm) {
      //sign up logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value, photoURL: "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"
          }).then(() => {
            // Profile updated!
            const { uid, email, displayName, photoURL } = auth.currentUser;
            dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
            navigate('/browse');
          }).catch((error) => {
            // An error occurred
            setErrorMessage(error.message);
          });

          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + errorMessage);
        });
    }
    else {
      //sign in logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          navigate('/browse');
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + errorMessage);
        });

    }
  };

  return (
    <div >
      <div className=" absolute block overflow-hidden  before:block before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-black/50 z-10" >
        <img className="min-w-full min-h-full  overflow-clip" src="https://assets.nflxext.com/ffe/siteui/vlv3/dc1cf82d-97c9-409f-b7c8-6ac1718946d6/14a8fe85-b6f4-4c06-8eaf-eccf3276d557/IN-en-20230911-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="background" />
      </div>
      <Header />
      <div className="before:block before: before:h-24 ">
        <form onSubmit={(e) => e.preventDefault()} ref={formRef} className="absolute w-[28%] rounded flex flex-col pb-40 gap-8 text-white bg-black/75   py-12 px-20   left-0 right-0 mx-auto z-10 ">
          <h1 className="font-bold text-3xl">Sign In</h1>

          <div className="w-full ">
            {!isSignInForm &&
              <input className="p-3 rounded my-2 w-full bg-[#333] " type="text" ref={name} placeholder="Full name" />
            }
            <input className="p-3 rounded my-2 w-full bg-[#333] " type="text" ref={email} placeholder="Email or phone number" />
            <input className="p-3 rounded my-2 w-full bg-[#333]" type="password" ref={password} placeholder="Password" />
            <p className="text-red-700">{errorMessage}</p>
            <button className='w-full font-bold bg-red-600 rounded py-3 mt-12' onClick={handleSignIn}>{isSignInForm ? "Sign In " : "Sign Up"}</button>
          </div>
          <div className="flex justify-between">
            {isSignInForm &&
              <span>
                <input type="checkbox" name="remember_me" id="" />
                <label className="mx-1" htmlFor="remember_me">Remember me</label>
              </span>
            }

            <a href="/" className="hover:underline">Need help?</a>

          </div>
          <div className="text-sm flex flex-col gap-6 text-gray-400">
            {isSignInForm ?
              <div>New to Netflix? <a href="/" className="hover:underline text-white cursor-pointer" onClick={handleForm}>Sign up now.</a></div>
              :
              <div>Already a User? <a href="/" className="hover:underline text-white cursor-pointer" onClick={handleForm}>Sign in now.</a></div>
            }
            <p className="">This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="/" className="hover:underline text-blue-800">Learn more.</a> </p>
          </div>

        </form>
      </div>
    </div>
  );
};


export default Login;