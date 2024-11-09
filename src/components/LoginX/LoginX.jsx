import { signInWithPopup, TwitterAuthProvider } from "firebase/auth";
import { auth } from "../../firbase/firbase.init";
import LogOut from "../LogOut/LogOut";

const provider = new TwitterAuthProvider(); 

function LoginX({set, user}) {
    
    const handelLogin = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                alert("sing in with X successfully!!");
                console.log(result.user)
                set(result.user)
            }).catch((error) => {
                console.error("ERROR", error);
            })
    }

  return (
    <>
            <button onClick={handelLogin} className="btn btn-success">Continue With X</button>

            {
                user && <LogOut></LogOut>
            }
            
    </>
  );
}

LoginX.propTypes

export default LoginX;
