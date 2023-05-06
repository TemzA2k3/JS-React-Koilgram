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
                    <button className="dropbtn"><img src={menu}></img></button>
                    <div class="dropdown-content">
                        <a href="#">Мой профиль</a>
                        <a href="#">Галерея</a>
                        <a href="#">Настройки</a>
                        <a href="#">Сменить аккаунт</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileComponent