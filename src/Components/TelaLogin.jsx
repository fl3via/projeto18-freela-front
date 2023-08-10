 import styled from "styled-components"
import { Link } from "react-router-dom"


export default function TelaLogin() {
    return (
        <Container>
            <LogoContainer>
               <p>MeCansei!</p>
            </LogoContainer>

            <FormContainer>
                <input type="email" placeholder="e-mail" />
                <input type="password" placeholder="senha"  />
             <Link to="/inicio" style={{paddingLeft: 13, textDecoration: 'none'}}> <button type="submit">Entrar</button> </Link>
            </FormContainer>
            <SignupLink to="/cadastro" style={{paddingLeft: 13, textDecoration: 'none'}}>
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
