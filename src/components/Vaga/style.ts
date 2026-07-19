import styled from 'styled-components'
import theme from '../../styles/theme'

export const ContaineerLinha = styled.li`
  border: 1px solid ${theme.colors.primary};
  background-color: ${theme.colors.secondary};
  color: ${theme.colors.primary};
  padding: 16px;
  transition: all ease 0.3s;
  border-radius: 8px;
  &:hover {
    background-color: ${theme.colors.primary};
    color: ${theme.colors.secondary};
  }
  &:hover a {
    border-color: ${theme.colors.primary};
    background-color: ${theme.colors.secondary};
    color: ${theme.colors.primary};
  }
`
export const VagaTitulo = styled.h3`
  font-weight: bold;
  margin-bottom: 16px;
`

export const VagaLink = styled.a`
  border-color: ${theme.colors.secondary};
  background-color: ${theme.colors.primary};
  color: ${theme.colors.secondary};
  display: inline-block;
  padding: 8px 16px;
  text-decoration: none;
  margin-top: 16px;
  font-weight: bold;
  font-size: 14px;
  border-radius: 8px;
  text-align: center;
`
