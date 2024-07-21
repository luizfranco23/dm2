import styled from "styled-components";
import { Theme } from '../../theme'; 

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const Box = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: ${Theme.padding.medium}px;
`
export const Title = styled.h1`
font-size: large;
color: #075C57;
`
export const SubTittle = styled.h2`
font-size: small;
padding: ${Theme.padding.small}px;
text-align: center;
color: #075C57;
`

export const ImageWrapper = styled.div`
  width: 100%;
  height: auto; /* Ou defina uma altura específica se necessário */
  display: flex;
  justify-content: center; /* Para centralizar a imagem horizontalmente */
  border-radius: 15px;
  overflow: hidden; 
`;