import styled from "styled-components"
import { Link } from "react-router-dom"

 


export default function Cadastro() {
    return(
        <Container>
    <CadastroContainer>
    <p>Cadastro</p>
    </CadastroContainer>
 
    <FormContainer>
      <input type="email" placeholder="e-mail"  />
      <input type="password" placeholder="senha"  />
      <input type="text" placeholder='nome' />
      <input type="string" placeholder='cpf'  />
      <input type="string" placeholder='telefone' />
     <Link to="/inicio" style={{paddingLeft: 13, textDecoration: 'none'}}><button type="submit" >Cadastrar</button></Link>
    </FormContainer>
    
      
   <Link to="/" style={{textDecoration: 'none', marginTop: '7px', color: '#52B6FF'}} >Já tem uma conta? Faça login!</Link>

   
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
