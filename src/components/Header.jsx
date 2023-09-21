import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../feature/userSlice";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Header = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.user);

  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      // dispatch(removeUser());
      navigate('/');
    }).catch((error) => {
      // An error happened.
      console.log(error);
    });

  };
  return (
    <div className="absolute flex items-center justify-between w-full top-0  z-50 bg-gradient-to-b from-black" >
      <div className="ml-8" >
        <img className="w-52  " src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo" />
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