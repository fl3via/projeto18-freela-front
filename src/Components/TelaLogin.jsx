import styled from "styled-components"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import apiAuth from "../services/apiAuth"


export default function TelaLogin() {
  const [form, setForm] = useState({ email: "", senha: "" })
  const navigate = useNavigate()

  function handleForm(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleLogin(e) {
    e.preventDefault()
    setIsLoading(true)

    apiAuth.login(form)
      .then(res => {
        console.log(res.data)
        navigate("/inicio")
      })
      .catch(err => {
        setIsLoading(false)
        console.log(err)
      })
  }


  return (
    <Container>
      <LogoContainer>
        <p>MeCansei!</p>
      </LogoContainer>

      <FormContainer onSubmit={handleLogin}>
        <input
          name="email"
          type="email"
          placeholder="e-mail"
          required
          value={form.email}
          onChange={handleForm} />
        <input
          name="senha"
          type="password"
          placeholder="senha"
          value={form.senha}
          required
          onChange={handleForm} />
        <button type="submit" >Entrar</button>
      </FormContainer>
      <SignupLink to="/cadastro" style={{ paddingLeft: 13, textDecoration: 'none' }}>
        Não tem uma conta? Cadastre-se!
      </SignupLink>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
 `;

const LogoContainer = styled.div`
  text-align: center;
  font-size: 45px;
  color: #52B6FF;
  img {
    width: 180px;
    height: 178px;
   
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

const SignupLink = styled(Link)`
margin-top: 20px;
color: #52B6FF;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 15px;
text-decoration: none;
`; 
