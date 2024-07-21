import styled from "styled-components";
import { Theme } from '../../theme'; 

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-position: center;
  width: 350px;
  padding: ${Theme.padding.medium}px;
  background: #1D71B8;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
  transition: background 0.3s ease, box-shadow 0.3s ease; /* Transições suaves para hover */
  cursor: pointer;
  &:hover {
    background: #155a8a; /* Cor de fundo no hover */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); /* Sombra no hover */
  }
`;

export const Link = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: #ffff;
  transition: color 0.3s ease; /* Transição suave para a cor do texto */

  &:hover {
    color: #e0f7fa; /* Cor do texto no hover */
  }
`;
