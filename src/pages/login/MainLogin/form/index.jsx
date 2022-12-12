import React from 'react'
import { StyledForm } from './style'
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { Api } from "../../../../services/api";
import {Link, useNavigate} from 'react-router-dom'
import { yupResolver } from "@hookform/resolvers/yup";
import {toast} from 'react-toastify'

function Form() {
  
  const loginSchema = yup.object().shape({
    email: yup
      .string()
      .required("O email é obrigatório!")
      .email("é necessário fornecer um e-mail válido"),
      password: yup
      .string()
      .required("a senha é obrigatória")
  })
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(loginSchema),
  });

  async function userLogin (data) {
    try {
      const user = await Api.post('/sessions', data)
      console.log(user)
      navigate('/home')
      localStorage.setItem('userID', user.data.user.id)
      localStorage.setItem('userToken', user.data.token)
    } catch (error) {
      console.log(error)
      toast.error('Algo deu errado', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      })
    }
  }

  async function submit(data) {
    console.log(data);
    await userLogin(data)
  }

  return (
    <StyledForm onSubmit={handleSubmit(submit)} noValidate>
      <h2 className='title1'>Login</h2>
      <label className='title2'>E-mail</label>
      <input type="email" {...register("email")} />
      <label className='title2' htmlFor="">Senha</label>
      <input type="password" {...register("password")}/>
      <button className='goHome title3' type='submit'>Entrar</button>
      <p className='title4'>Ainda não possui uma conta?</p>
      <Link className='goRegister title3' to={'/register'}>Cadastre-se</Link>
    </StyledForm>
    
  )
}

export default Form