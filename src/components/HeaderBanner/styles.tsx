import { Theme } from "@/theme";
import styled from "styled-components";

export const Container = styled.div<{ isMobile?: boolean | undefined }>`
  display: flex;
  flex-direction: column;
  background-image: url("/img/background.jpg");
  background-size: cover; 
  background-position: center;
  width: 100%; 
  padding: ${Theme.padding.extraLarge}px;
  height: ${({ isMobile }) => (isMobile ? '100vh' : '70vh')}; 
`;

export const BoxTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-left: ${Theme.padding.extraLarge}px;
  width: 100%;
  height: 100%;
`;

export const TitleManagement = styled.div`
  display: flex;
  margin-top: ${Theme.margin.medium}px;
  height: 200;
  border-radius: 50px;
  background-color: ${Theme.color.blue};
  align-items: center; 
  font-weight: 500;
  color: ${Theme.color.white};
  padding: ${Theme.padding.medium}px;
  box-shadow: 0 8px 10px -2px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  transition: background-color 0.8s, color 0.3s, box-shadow 3s;

  &:hover {
    background-color: ${Theme.color.white};
    color: ${Theme.color.blue};
  }
`;

export const TitleH1 = styled.h1`
  font-size: 16;
  align-items: center;
  font-weight: 300;
  `

export const Title = styled.h1`
  align-items: center;
  font-size: 16; 
  font-weight: 300;
  padding: ${Theme.padding.minimum}px;
`;

export const Box = styled.div<{ isMobile?: boolean }>` 
  display: flex;
  flex-direction: ${({ isMobile }) => (isMobile ? 'column' : 'row')}; 
  align-items: center;
`;

export const TitleWelcome = styled.h1`
  font-size: 16;
  align-items: center;
  font-weight: 300;
  padding: ${Theme.padding.minimum}px;

`;
