import styled from 'styled-components'
import { Button, cores } from '../../styles'

export const Div = styled.div`
  padding: 8px;
  border-radius: 14px 14px 0 0;
  background-color: ${cores.branco};
  display: flex;
  align-items: center;
  height: 48px;
  justify-content: space-between;
  // position: fixed;
  // left: 250px;
  // right: 52px;
`
export const DivButtons = styled.div`
  // background-color: #b3ffb3;
  display: flex;
  align-items: center;
  height: 48px;

  span {
    margin-right: 12px;
    font-size: 13px;
    color: #666666;
  }
`
export const ButtonBox = styled(Button)`
  background-color: ${cores.branco};
  border-radius: 4px;
  width: 25px;
  height: 38px;

  :hover {
    background-color: ${cores.corFundo};
  }
  img {
    width: 20px;
    height: 20px;
    filter: grayscale(100%);
  }

  &#first-child {
    margin-left: 8px;
  }
  &#last-child {
    margin-right: 6px;
  }
  &#end {
    margin-right: 10px;
  }
`
export const ButtonCircle = styled(Button)`
  background-color: ${cores.branco};
  height: 38px;
  width: 38px;

  img {
    width: 14px;
    height: 14px;
  }

  &#pages {
    margin-right: 8px;
  }

  :hover {
    background-color: ${cores.corFundo};
  }
`
