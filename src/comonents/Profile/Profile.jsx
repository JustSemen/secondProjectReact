import style from './Profile.module.css'
import wallpaper from '../../img/wallpaper.jpg'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'

function Profile({ profilePage, ...props }) {
    return (
        <div>
            <div className={style.wallpaper}>
                <img src={wallpaper} />
            </div>
            <ProfileInfo />
            <MyPosts postsData={profilePage.postsData} />
        </div>
    )
}

export default Profile