import "./MainComponent.css"
import Navbar from "../NavbarComponent/Navbar"
import Header from "../HeaderComponent/Header"
import Profile from "../ProfileComponent/Profile"


const MainComponent = () => {
    return (
        <div className="main">
            <Navbar/>
            <Header/>
            <Profile/>        
        </div>
    )
}

export default MainComponent