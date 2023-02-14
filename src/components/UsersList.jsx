import React from 'react'
import UserCard from "./UserCard"

const UsersList = ({users, deleteUser, setUpdatingUser, handleClickShowModal}) => {
  return (
    <div>
        <section>
        {
          users.map(user => <UserCard handleClickShowModal={handleClickShowModal} setUpdatingUser={setUpdatingUser} deleteUser={deleteUser} key={user.id} user={user}/> )
        }
      </section>
    </div>
  )
}

export default UsersList