import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./../../firbase/firbase.init";
import { useState } from "react";
import LogOut from "./../LogOut/LogOut";
import LoginX from "../LoginX/LoginX";

const googleProvider = new GoogleAuthProvider();

function SingUp() {
  const [user, setUser] = useState(null);

  const handelSingUp = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        console.error("ERROR", error);
      });
  };
  console.log(user);

  return (
    <div className="space-y-3">
      {user ? (
        <LogOut set={setUser}></LogOut>
      ) : (
        <>
          <h1 className="font-extrabold text-3xl">Sing Up Now</h1>
          <div className="flex flex-col gap-2">
          <button onClick={handelSingUp} className="btn btn-success">
            Continue With Google
          </button>
          
          <LoginX set={setUser} user={user}></LoginX>

          </div>
        </>
      )}

      {user && (
        <div className="my-12">
          <h1 className="font-bold text-xl text-purple-500">
            Name: {user.displayName}
          </h1>
          <h1 className="font-bold text-xl text-purple-500">
            Email: {user.email}
          </h1>

          <img src={user.photoURL} alt={user.displayName} />
        </div>
      )}
    </div>
  );
}

export default SingUp;
