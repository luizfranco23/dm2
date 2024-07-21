import React from 'react';
import * as S from './styles';

interface CardStoreProps {
  storeName: string;
  whatsApp: string;
}

const CardStore: React.FC<CardStoreProps> = ({ storeName, whatsApp }) => {
  return (
    <S.Container>
      <S.Link href={whatsApp} target="_blank" rel="noopener noreferrer">
        {storeName}
      </S.Link>
    </S.Container>
  );
};

export default CardStore;