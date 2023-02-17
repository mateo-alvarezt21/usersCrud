import React from 'react'
import UserCard from "./UserCard"
import "./styles/UserList.css"

const UsersList = ({users, deleteUser, setUpdatingUser, handleClickShowModal}) => {
  return (
    <div>
        <section className='userList'>
        {
          users.map(user => <UserCard handleClickShowModal={handleClickShowModal} setUpdatingUser={setUpdatingUser} deleteUser={deleteUser} key={user.id} user={user}/> )
        }
      </section>
    </div>
  )
}

export default UsersList