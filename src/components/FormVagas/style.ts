import styled from 'styled-components'
import theme from '../../styles/theme'

export const Formulario = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: ${theme.colors.secondary};
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;
`
export const Input = styled.input`
  padding: 0 16px;
  outline-color: ${theme.colors.secondary};
`
export const BotaoPesquisa = styled.button`
  background-color: ${theme.colors.primary};
  border: 1px solid ${theme.colors.primary};
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: ${theme.colors.secondary};
  margin-left: 8px;
  cursor: pointer;
`
