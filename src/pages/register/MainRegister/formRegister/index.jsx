import React from "react";
import { useForm } from "react-hook-form";
import { StyledFormRegister } from "./style";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Api } from "../../../../services/api";
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'

function FormRegister() {
  const navigate = useNavigate()
  const modules = [
    'Primeiro módulo (Introdução ao Frontend)',
    'Segundo Módulo (Frontend avançado)',
    'Terceiro módulo (Introdução ao Backend)',
    'Quarto módulo (Backend Avançado)'
  ]
  const registerSchema = yup.object().shape({
    email: yup
      .string()
      .required("O email é obrigatório!")
      .email("é necessário fornecer um e-mail válido"),
      password: yup
      .string()
      .required("a senha é obrigatória")
      .matches(/(?=.*?[a-z])/, "É necessário pelo menos uma letra")
      .matches(/(?=.*?[0-9])/, "É necessário pelo menos um número")
      .matches(
        /(?=.*?[#?!@$%^&*-])/,
        "É necessário pelo menos um caracter especial"
      )
      .min(8, "É necessário pelo ter menos 8 caracteres"),
      name: yup
      .string()
      .required("O nome é obrigatório!")
      .min(3, "O nome precisa ter no mínimo 3 caracteres")
      .max(200, "O nome não pode ter mais de 200 caracteres"),
      bio: yup.string()
      .required('Nos conte um pouco sobre você'),  
      contact: yup.string()
      .required('Como podemos entrar em contato com você?'),
      course_module: yup.string()
      .required("Módulo atual é obrigatório!"),
      confirmPassword: yup.string()
      .required()
      .oneOf([yup.ref('password')],'As senhas precisam ser iguais')
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(registerSchema),
  });
  
  async function userRegister (data) {
    try {
      const response = await Api.post('/users', data)
      toast.success('Tudo certo!', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
      navigate('/')
    } catch (error) {
      console.log(error)
      toast.error('Algo deu errado', {
        position: "top-right",
        autoClose: 1500,
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
    await userRegister(data)
  }
  return (
    <StyledFormRegister onSubmit={handleSubmit(submit)} noValidate>
      <h2 className="title1">Crie sua conta</h2>
      <p className="title2">Rapido e grátis, vamos nessa</p>
      <label className="title2" htmlFor="">
        Nome
      </label>
      <input type="text"  {...register("name")} />
      {errors.name?.message && <p className="error title2">{errors.name.message}</p>}
      <label className="title2">
        E-mail
      </label>
      <input className="title2" type="email" {...register("email")}/>
      {errors.email?.message && <p className="error title2">{errors.email.message}</p>}
      <label className="title2">
        Senha
      </label>
      <input type="password" {...register("password")}/>
      {errors.password?.message && <p className="error title2">{errors.password.message}</p>}
      <label className="title2">
        Confirmar senha
      </label>
      <input type="password" {...register("confirmPassword")} />
      {errors.confirmPassword?.message && <p className="error title2">{errors.confirmPassword.message}</p>}
      <label className="title2">
        Bio
      </label>
      <input type="text" {...register("bio")} />
      {errors.bio?.message && <p className="error title2">{errors.bio.message}</p>}
      <label className="title2">
        Contato
      </label>
      <input type="text" {...register("contact")} />
      {errors.contact?.message && <p className="error title2">{errors.contact.message}</p>}
      <label className="title2">
        Selecionar módulo
      </label>
      <select {...register("course_module")}>      
        <option value="">Selecionar módulo</option>
        {
          modules.map((mod, index) => {
            return <option key={index} value={mod}>{mod}</option>
          })
        }
      </select>
      {errors.course_module?.message && <p className="error title2">{errors.course_module.message}</p>}
      <button type="submit" className="registerBtn title3">
        Cadastrar
      </button>
    </StyledFormRegister>
  );
}

export default FormRegister;
