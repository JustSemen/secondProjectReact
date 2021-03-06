import React from 'react';
import MyButton from '../UI/MyButton/MyButton';
import noAvatar from '../../img/noAvatar.jpg'
import styles from './Users.module.css'
import { NavLink } from 'react-router-dom'
import axios from 'axios';

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let curP = props.currentPage;
    let curPF = ((curP - 3) < 0) ? 0 : curP - 3;
    let curPL = curP + 2;
    let slicedPages = pages.slice(curPF, curPL);

    return (
        <div>
            <div>
                {slicedPages.map((page) => {
                    return <span key={page} onClick={() => props.onPageChanged(page)} className={page === props.currentPage ? styles.selectedPage : ''}>{page}</span>
                })}
            </div>
            {
                props.usersData.map(user => <div key={user.id} className={styles.user}>
                    <span className={styles.avatar}>
                        <div>
                            <NavLink to={`/profile/` + user.id}>
                                <img src={user.photos.small != null ? user.photos.small : noAvatar} className={styles.userPhoto} />
                            </NavLink>
                        </div>
                        <div>
                            {user.followed
                                ? <MyButton onClick={() => {
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
                                        withCredentials: true,
                                        headers: {
                                            'API-KEY': '94903ebe-57b5-4d2f-abcd-1ef2c44b023f'
                                        }
                                    }).then(response => {
                                        if (response.data.resultCode == 0) {
                                            props.unFollow(user.id)
                                        }
                                    })
                                }}>Unfollow</MyButton>
                                : <MyButton onClick={() => {
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, {
                                        withCredentials: true,
                                        headers: {
                                            'API-KEY': '94903ebe-57b5-4d2f-abcd-1ef2c44b023f'
                                        }
                                    }).then(response => {
                                        if (response.data.resultCode == 0) {
                                            props.follow(user.id)
                                        }
                                    })
                                }}>Follow</MyButton>}
                        </div>
                    </span>
                    <span className={styles.userInfo}>
                        <span>
                            <div className={styles.name}>{user.name}</div>
                            <div className={styles.status}>{user.status}</div>
                        </span>
                        <span className={styles.locationInfo}>
                            <div>{"user.location.country"}</div>
                            <div>{"user.location.city"}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    );
};

export default Users;