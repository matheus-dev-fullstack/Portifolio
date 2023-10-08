import styled, { css } from 'styled-components'
import { cores } from '../../styles'

export const Header = styled.header`
  background-color: ${cores.corPrincipal};
  height: 63px;
  ${css`
    position: fixed;
    top: 0;
    width: 100%;
  `}
`
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  padding: 12px;
  margin: 0 40px;
`
export const TitleName = styled.h1`
  color: ${cores.branco};
  font-family: 'Holiday', sans-serif;
`

export const Links = styled.ul`
  display: flex;
  gap: 12px;
`
export const LintItem = styled.li`
  font-size: 28px;
`
export const Link = styled.a`
  color: ${cores.branco};
  text-decoration: none;
`
