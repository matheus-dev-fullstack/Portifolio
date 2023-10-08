import styled, { css } from 'styled-components'
import { cores } from '../../styles'

export const Header = styled.header`
  background-color: ${cores.corPrincipal};
  height: 63px;
  margin-bottom: 90px;
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
  padding: 16px 0;
  margin: 0 40px;
`
export const TitleName = styled.h1`
  color: ${cores.branco};
  font-family: 'Dwayne Dylan', sans-serif;
  // font-family: 'Mowgli Script', sans-serif;
  font-size: 34px;
`

export const Links = styled.ul`
  display: flex;
  gap: 18px;
`
export const LintItem = styled.li`
  font-size: 24px;
`
export const Link = styled.a`
  color: ${cores.branco};
  text-decoration: none;
  font-family: 'Megrim', cursive;
`
