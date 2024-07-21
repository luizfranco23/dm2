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
`
export const Link = styled.a`
display: flex;
align-items: center;
justify-content: center;
text-decoration: none;
color: #ffff;
` 