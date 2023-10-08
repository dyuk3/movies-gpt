import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../feature/userSlice";
import { useEffect } from "react";
import { NETFLIX_LOGO } from "../utils/constants";

const Header = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.user);


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, 
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
        navigate('/browse');
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate('/');
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);
  // console.log(user);

  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      navigate('/error');
    });

  };
  return (
    <div className="absolute flex items-center justify-between w-full top-0  z-50 bg-gradient-to-b from-black" >
      <div className="ml-8" >
        <img className="w-52  " src={NETFLIX_LOGO} alt="logo" />
      </div>
      {user &&

        <div className="flex gap-4">
          <img className="w-12 h-12" src={user.photoURL} alt="" />
          <button className="bg-red-500" onClick={handleSignOut}>Sign out</button>
        </div>
      }

    </div>
  );
};

export default Header;