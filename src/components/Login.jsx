import { useState } from "react";
import Header from "./Header";

const Login = () => {

  const [isSignInForm, setisSignInForm] = useState(true);

  const handleForm = () => {
    setisSignInForm(!isSignInForm);
  };

  return (
    <div >
      <div className=" absolute block overflow-hidden  before:block before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-black/50 z-10" >
        <img className="min-w-full min-h-full  overflow-clip" src="https://assets.nflxext.com/ffe/siteui/vlv3/dc1cf82d-97c9-409f-b7c8-6ac1718946d6/14a8fe85-b6f4-4c06-8eaf-eccf3276d557/IN-en-20230911-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="background" />
      </div>
      <Header />
      <div className="before:block before: before:h-24 ">
        <form className="absolute w-[28%] rounded flex flex-col pb-40 gap-8 text-white bg-black/75   py-12 px-20   left-0 right-0 mx-auto z-10 ">
          <h1 className="font-bold text-3xl">Sign In</h1>

          <div className="w-full ">
            {!isSignInForm &&
              <input className="p-3 rounded my-2 w-full bg-[#333] " type="text" placeholder="Full name" />
            }
            <input className="p-3 rounded my-2 w-full bg-[#333] " type="email" placeholder="Email or phone number" />
            <input className="p-3 rounded my-2 w-full bg-[#333]" type="password" placeholder="Password" />
            <button className='w-full font-bold bg-red-600 rounded py-3 mt-12'>{isSignInForm ? "Sign In " : "Sign Up"}</button>
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
              <div>New to Netflix? <span className="hover:underline text-white cursor-pointer" onClick={handleForm}>Sign up now.</span></div>
              :
              <div>Already a User? <span className="hover:underline text-white cursor-pointer" onClick={handleForm}>Sign in now.</span></div>
            }
            <p className="">This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="/" className="hover:underline text-blue-800">Learn more.</a> </p>
          </div>

        </form>
      </div>
    </div>
  );
};


export default Login;