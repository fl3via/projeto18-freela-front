import styled from "styled-components"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import apiAuth from "../services/apiAuth"




export default function Cadastro() {
  const [form, setForm] = useState({ email: "", senha: "" , cpf: "", nome: "", telefone: ""})
  const navigate = useNavigate()

  function handleForm(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function cadastro(e) {
    e.preventDefault()
   
    apiAuth.cadastro(form)
      .then(res => {
        console.log(res.data)
        navigate("/")
      })
      .catch(err => {
        setIsLoading(false)
        console.log(err.response.data)
      })
  }

  return (
    <Container>
      <CadastroContainer>
        <p>Cadastro</p>
      </CadastroContainer>

      <FormContainer onSubmit={cadastro}>
        <input
          type="email"
          placeholder="e-mail"
          name="email"
          required
          value={form.email} 
          onChange={handleForm}/>
        <input
          type="password"
          placeholder="senha"
          name="senha"
          required
          value={form.senha} 
          onChange={handleForm}/>
        <input
          type="text"
          placeholder='nome'
          name="nome"
          required
          value={form.nome}
          onChange={handleForm} />
        <input
          type="string"
          placeholder='cpf'
          name="cpf"
          required
          value={form.cpf} 
          onChange={handleForm}/>
        <input 
        type="number" 
        placeholder='telefone'
        name="telefone"
       required
       value={form.telefone} 
       onChange={handleForm}/>
       <button type="submit" >Cadastrar</button>
      </FormContainer>


      <Link to="/" style={{ textDecoration: 'none', marginTop: '7px', color: '#52B6FF' }} >Já tem uma conta? Faça login!</Link>


    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CadastroContainer = styled.div`
  text-align: center;
  font-size: 45px;
  color: #52B6FF;

  img {
    max-width: 100%;
    max-height: 100%;
  }
`;



const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;

  input {
    margin-bottom: 10px;
    padding-left: 10px;
    width: 303px;
height: 45px;
border: 1px solid #D5D5D5;
border-radius: 5px;
font-size: 19px;
  }

  button {
    padding: 8px 16px;
    background: #52B6FF;
border-radius: 4px;
width: 303px;
height: 45px;
border: none;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 20px;
color: white;
cursor: pointer;
  }

  button:hover {
    background: blue;
}
`;
