import React from 'react'
import "./styles/UserCard.css"

const UserCard = ({user, deleteUser, setUpdatingUser, handleClickShowModal}) => {

    const handleClickEdit = () =>{
        setUpdatingUser(user)
        handleClickShowModal()
    }

return (
    <div>
        <article className='userCard' key={user.id}>
            <div className='contenedor_userInfo'>
                <h3 className='userCard__name'>{user.first_name}</h3>
                <ul className='userCard__list'>
                    <li className='userCard__email'><span></span> {user.email} </li>
                    <li className='userCard__birthday'><span></span> <i className='userCard__icon bx bx-gift'></i> {user.birthday}</li>

                </ul>
            </div>
                <footer className='userCard__footer'>
                    <button className='userCard__button' onClick={() => deleteUser(user.id)}> <i className='bx bx-trash'></i></button>
                    <button className='userCard__button' onClick={handleClickEdit}> <i className='bx bx-pencil'></i></button>
                </footer>
            </article>
    </div>
)
}

export default UserCard