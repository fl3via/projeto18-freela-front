 import styled from 'styled-components';
 import { Link } from "react-router-dom"


export default function TelaInicial() {
    return (

        <Container>
        <h1>Itens Disponíveis </h1>
       <Link to="/detalhes" style={{paddingLeft: 13, textDecoration: 'none', color: 'black',}}> 
        <ProductCardContainer>
        <ProductImage src="./src/assets/foto.png" />
        <ProductName>nome</ProductName>
        <ProductDescription>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</ProductDescription>
      </ProductCardContainer>
      </Link>
     <Footer> <Link to="/inicio" style={{  color: '#52B6FF', textDecoration: 'none'}}><p>Tela Inicial</p></Link> <Link to="/gerenciamento" style={{paddingLeft: 13, textDecoration: 'none', color: '#52B6FF',}}><p>Gerenciar </p></Link>  <Link to="/adicionar" style={{paddingLeft: 13, textDecoration: 'none', color: '#52B6FF',}}><p>Adicionar</p> </Link>   </Footer> 
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
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

`;

const ProductImage = styled.img`
  max-width: 100%;
  max-height: 200px;
  border-radius: 8px;
`;

const ProductName = styled.h3`
  font-size: 24px;
  margin-top: 10px;
`;


const ProductDescription = styled.p`
  font-size: 18px;
  margin-top: 5px;
`; 

const Footer = styled.div`
display: flex;
gap: 50px;
font-size: 20px;
margin-top: 100px;
cursor: pointer;
color: #52B6FF;
font-weight: bold;

p:hover {
    color: blue;
}
`;
 
