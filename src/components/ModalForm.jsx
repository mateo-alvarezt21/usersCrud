import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import "./styles/ModalForm.css"

const defaultValues = {
    first_name: "",
    last_name:"",
    email:"",
    password:"",
    birthday:""
}

const ModalForm = ({isShowModal, handleClickShowModal, createUser, updatingUser, updateUser, setUpdatingUser}) => {

    const {register, handleSubmit, reset} = useForm()

    const submit = (data) =>{
        if(updatingUser){
            updateUser(data, updatingUser.id)
        }else{
            createUser(data)
        }
        reset(defaultValues)
    }

    const handleClickClose = () =>{
        handleClickShowModal()
        reset(defaultValues)
        setUpdatingUser()
    }

    useEffect(() => {
        if(updatingUser){
            reset(updatingUser)
        }
    }, [updatingUser])
    
    

    return (
        <section className={`modalForm ${isShowModal ? "activeForm" : ""}`}>
            <form onSubmit={handleSubmit(submit)} className='modalForm__form'>
                <h3 className='modalForm__title'>{updatingUser ? "Edit user" : "New user"}</h3>
                <i onClick={handleClickClose} className='modalForm__x bx bx-x'></i>

                <div className='modalForm__div'>
                    <label className='modalForm__label'>First Name</label>
                    <input className='modalForm__input' type="text" {...register("first_name")}></input>
                </div>
                <div className='modalForm__div'>
                    <label className='modalForm__label'>Last Name</label>
                    <input className='modalForm__input' type="text" {...register("last_name")}></input>
                </div>
                <div className='modalForm__div'>
                    <label className='modalForm__label'>Email</label>
                    <input className='modalForm__input' type="email" {...register("email")}></input>
                </div>
                <div className='modalForm__div'>
                    <label className='modalForm__label'>Password</label>
                    <input className='modalForm__input' type="password" {...register("password")}></input>
                </div>
                <div className='modalForm__div'>
                    <label className='modalForm__label'>Birthday</label>
                    <input className='modalForm__input' type="date" {...register("birthday")}></input>
                </div>
                <button className='modalForm__btn'>{updatingUser ? "Save changes" : "Add new user"}</button>
            </form>
        </section>
    )
}

export default ModalForm