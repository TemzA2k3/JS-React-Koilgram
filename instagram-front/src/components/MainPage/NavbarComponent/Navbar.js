import './Navbar.css'
import burg from '../../../images/burg.png'
import settings from '../../../images/settings.svg'
import gallery from '../../../images/gallery.png'
import exit from '../../../images/exit.png'
import message from '../../../images/message.png'

const Navbar = () => {

    const onToogleNav = () => {
        const nav = document.querySelector('.nav')
        const pic = document.querySelectorAll('.text')
        nav.classList.toggle("active")
        pic.forEach(item => item.classList.toggle('hidden'))
    }

    return (
        <div className="nav">
            <div className="nav-item mt-10">
                <button onClick={onToogleNav} className="settbtn"><div className="nav-btn"><img className='img' src={burg}></img><p className="hidden text">Options</p></div></button>
            </div>            
            <div className="nav-item">
                <button className="settbtn"><div className="nav-btn"><img className='img' src={gallery}></img><p className="hidden text">Gallery</p></div></button>
                <button className="settbtn"><div className="nav-btn"><img className='img' src={message}></img><p className="hidden text">Messages</p></div></button>
                <button className="settbtn"><div className="nav-btn"><img className='img' src={settings}></img><p className="hidden text">Settings</p></div></button>
            </div>           
            <div className="nav-item mb-10">
                <button className="settbtn"><div className="nav-btn"><img className='img' src={exit}></img><p className="hidden text">Leave</p></div></button>
            </div>
        </div>
    )
}

export default Navbar