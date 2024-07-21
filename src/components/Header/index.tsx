import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ShareIcon from '@mui/icons-material/Share';
import { Theme } from '@/theme';
import Image from 'next/image';
import * as S from './styles';
import React from 'react';
import Logo from '../Logo';
import Store from '../../../public/img/store.png';

export default function Header() {
  return (
    <S.Container>
      <Logo />
      <S.Box>
        <S.Title>
          @doutordm2diabetes
        </S.Title>
        <S.SubTittle>
          Mais do que controle, tratamento inteligente
        </S.SubTittle>
      </S.Box>
      <S.ImageWrapper>
        <Image
          src={Store}
          alt="Imagem da loja"
          layout="responsive"
          width={450}
          height={350}
        />
      </S.ImageWrapper>
    </S.Container>
  );
}
