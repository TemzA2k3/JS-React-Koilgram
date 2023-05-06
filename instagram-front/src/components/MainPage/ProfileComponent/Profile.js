import './Profile.css'
import img from '../../../images/withoutimg.webp'
import menu from '../../../images/openlist.png'

const ProfileComponent = () => {

    return (
        <div className="profbar">
            <div className="profile">
                <div className="prof-img">
                    <img className="image" src={img}></img>
                </div>
                <div className="name-surn">
                    <div className='name'>
                        KARIM
                    </div>
                    <div className='surname'>
                        KUCHMURADOV
                    </div>
                </div>
                <div className="menu">
                    <img className="" src={menu}></img>
                </div>
            </div>
        </div>
    )
}

export default ProfileComponent