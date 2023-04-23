import "./MainComponent.css"
import Navbar from "../NavbarComponent/Navbar"
import Header from "../HeaderComponent/Header"


const MainComponent = () => {
    return (
        <div className="main">
            <Navbar/>
            <Header/>
        </div>
    )
}

export default MainComponent