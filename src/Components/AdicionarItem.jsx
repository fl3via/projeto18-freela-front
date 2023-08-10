import styled from "styled-components"
import { Link } from "react-router-dom"



export default function AdicionarIten() {
    return(
        <Container>
    <CadastroContainer>
    <p>Adicionar</p>
    </CadastroContainer>
 
    <FormContainer>
      <input type="text" placeholder="Nome"  />
      <input type="url" placeholder="Url da imagem"  />
      <input type="text" placeholder='Descrição' />
      <input type="text" placeholder='Categoria'  />
      <input type="text" placeholder='Valor' />
   <Link to="/inicio" style={{paddingLeft: 13, textDecoration: 'none'}}>  <button type="submit" >Adicionar</button> </Link>
    </FormContainer>
   
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
letter-spacing: 1px;
  }

  button:hover {
    background: blue;
}
`;

const SignupLink = styled.p`
  margin-top: 20px;


    color: #52B6FF;
    font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 16px;
text-decoration: none; 
cursor: pointer;
`; 
