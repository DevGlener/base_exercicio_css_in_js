import styled from 'styled-components'
import theme from '../../styles/theme'

export const FormContainer = styled.div`
  height: 360px;
  width: 100%;
  background-image: url('https://cdn.pixabay.com/photo/2018/08/10/15/45/woman-3597101_1280.jpg');
  background-size: cover;
  position: relative;

  display: flex;
  align-items: center;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${theme.colors.primary};
    content: '';
    opacity: 0.7;
    z-index: 0;
  }
`

export const Container = styled.div`
  position: relative;
  color: ${theme.colors.secondary};
  z-index: 999;
  margin: 0 auto;
`

export const HeroTitle = styled.h1`
  font-family: ${theme.fonts.secundary};
  font-size: 48px;
`
