// Logo.js
import React from 'react';
import * as S from './styles';
import logoImg from '../../../public/img/logocompleta.png';

export default function Logo() {
  return (
    <S.Container>
      <S.Logo src={logoImg.src} alt="Logo" />
    </S.Container>
  );
}
