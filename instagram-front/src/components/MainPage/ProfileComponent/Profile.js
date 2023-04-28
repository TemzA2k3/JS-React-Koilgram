import './Profile.css'
import img from '../../../images/withoutimg.webp'

const ProfileComponent = () => {

    return (
        <div className="profbar">
            <div className="profile">
                <div className="prof-img">
                    <img className="image" src={img}></img>
                </div>
                <div className="name-surn">
                    <div className='name'>
                        <p>KARIM</p>
                    </div>
                    <div className='surname'>
                        <p>KUCHMURADOV</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileComponent