import styled from "styled-components";
import { Theme } from '../../theme'; 

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: ${Theme.padding.medium}px;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${Theme.padding.medium}px;
`;

export const Title = styled.h1`
  font-size: 1.5rem; 
  color: #075C57;
`;

export const SubTittle = styled.h2`
  font-size: 0.7rem; 
  padding: ${Theme.padding.small}px;
  text-align: center;
  color: #075C57;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  max-width: 450px;
  height: auto;
  display: flex;
  justify-content: center;
  border-radius: 15px;
  overflow: hidden;
  position: relative;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;
