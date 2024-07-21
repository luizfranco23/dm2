// Logo.js
import React from 'react';
import * as S from './styles';
import logo from '../../../public/img/logo.png';

export default function Logo() {
  return (
    <S.Container>
      <S.Logo src={logo.src} alt="Logo" />
    </S.Container>
  );
}
