import styled from 'styled-components'
import { Link } from "react-router-dom"

export default function DetalhesDoProduto() {
    return (
      <Container>
        <h1>Informações</h1>
        <ProductCardContainer>
          <img src="./src/assets/foto.png"  />
          <ProductName>Nome do Produto</ProductName>
          <p>Categoria: </p>
          <ProductDescription>Descrição do Produto</ProductDescription>
         <p>Pedro Tel.9 5555-5555 pedro@gmail.com</p>
        </ProductCardContainer>
        <Link to="/inicio" style={{paddingLeft: 13, textDecoration: 'none'}}> <BackButton><p>Voltar</p></BackButton> </Link>
      </Container>
    )
  }
  
 const Container = styled.div`
h1 {
    color: #52B6FF;
}
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
   
img {
    width: 200px;
    height: 200px;
    border-radius: 5px;
}

`;

const ProductCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #D5D5D5;
  border-radius: 8px;
  padding: 20px;
  margin: 10px;
  width: 300px;
  height: 400px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
 
`;


const ProductName = styled.h3`
  font-size: 24px;
  margin-top: 10px;
`;

const ProductDescription = styled.p`
  font-size: 18px;
  margin-top: 5px;
`;

const BackButton = styled.div `
background-color: #52B6FF;
color: #fff;
width: 150px;
height: 50px;
display: flex;
justify-content: center;
align-items: center; 
border-radius: 3px;
font-size: 22px;
font-weight: bold;
letter-spacing: 1px;

`; 

