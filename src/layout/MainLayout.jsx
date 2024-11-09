import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar/NavBar"

function MainLayout() {
  return (
    <div>
        {/* navbar */}
        <NavBar></NavBar>
        {/* outlet */}
         <Outlet></Outlet>
        {/* footer */}
    </div>
  )
}

export default MainLayout