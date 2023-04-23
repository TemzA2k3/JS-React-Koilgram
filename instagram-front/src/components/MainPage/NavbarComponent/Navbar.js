import './Navbar.css'
import burg from '../../../images/burg.png'
import settings from '../../../images/settings.png'
import gallery from '../../../images/gallery.png'
import exit from '../../../images/exit.png'
import message from '../../../images/message.png'

const Navbar = () => {
    return (
        <div className="nav">
            <div className="nav-item mt-10">
                <div className="nav-btn"><img className='img' src={burg}></img></div>
            </div>            
            <div className="nav-item">
                <div className="nav-btn"><img className='img' src={gallery}></img></div>
                <div className="nav-btn"><img className='img' src={message}></img></div>
                <div className="nav-btn"><img className='img' src={settings}></img></div>
            </div>           
            <div className="nav-item mb-10">
                <div className="nav-btn"><img className='img' src={exit}></img></div>
            </div>
        </div>
    )
}

export default Navbar