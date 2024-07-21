import React from 'react';
import * as S from './styles';
import Header from '../Header';
import Image from 'next/image';
import { Fade, useMediaQuery } from '@mui/material';

export default function HeaderBanner() {
  const isMobile = useMediaQuery('(max-width:714px)');

  return (
    <S.Container isMobile={isMobile}>
      <Header />
      <S.Box isMobile={isMobile}>
        <S.BoxTitle>
          <Fade in timeout={2000}>
            <S.TitleWelcome>
              Seja bem-vindo ao
            </S.TitleWelcome>
          </Fade>
          <Fade in timeout={3000}>
            <S.Title>
              Painel de Controle
            </S.Title>
          </Fade>
          <S.TitleManagement>
            Gerenciamento de Mídias
          </S.TitleManagement>
        </S.BoxTitle>
        <Fade in timeout={2000}>
          <Image src="/img/boy.png" alt="background" width={500} height={500} />
        </Fade>
      </S.Box>
    </S.Container>
  );
}
