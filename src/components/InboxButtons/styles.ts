import styled from 'styled-components'
import { cores } from '../../styles'

export const Div = styled.div`
  background-color: #fff;
  height: 56px;
  display: flex;
  // position: fixed;
  // left: 250px;
  // right: 52px;
  // margin-top: 48px;
`
export const ButtonInbox = styled.button`
  background-color: ${cores.branco};
  color: ${cores.corTexto};
  display: flex;
  height: 100%;
  width: 256px;
  justify-content: flex-start;
  align-items: center;
  border: none;
  font-weight: 500;
  font-size: 14px;
  margin-bottom: 50px;

  img {
    margin: 0 16px;
  }

  :hover {
    background-color: ${cores.corSecundaria};
  }

  &.active {
    color: #0066ff;
    border-bottom: 3px solid #0052cc;
  }
`
