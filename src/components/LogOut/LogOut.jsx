import { getAuth, signOut } from "firebase/auth"

function LogOut({set}) {
  

const handelSingOut = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
        alert("log Out successfully")
        set(null)
    }).catch((error) => {
      console.log("ERROR", error)
    })

}


  return (
    <div className="space-y-3">
    <h1 className="font-extrabold text-3xl">Log Out Now</h1>
    <button onClick={handelSingOut} className="btn btn-success" >Log Out</button>
</div>
  )
}

LogOut.propTypes 

export default LogOut