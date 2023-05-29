import styled, { css } from 'styled-components'

export const BarraLateral = styled.div`
  width: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  // display: none;

  ${css`
    position: fixed;
    width: 50px;
    height: 100vh;
    right: 0;
  `}

  #more {
    margin-top: 60px;
  }
`
