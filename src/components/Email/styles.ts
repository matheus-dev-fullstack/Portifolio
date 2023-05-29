import styled from 'styled-components'
import { Button, cores } from '../../styles'

export const ListaEmails = styled.div`
  display: flex;
  flex-direction: column;
`

export const EmailDiv = styled.div`
  background-color: ${cores.branco};
  height: 40px;
  display: flex;
  // box-sizing: border-box;
  border: 2px solid ${cores.branco}};

  :hover {
    border: 2px solid ${cores.cinzaFraco};
  }
`

export const Buttons = styled.div`
  display: flex;
  margin-left: 10px;
  width: 140px;
`
export const ButtonStatus = styled(Button)`
  height: 36px;
  width: 36px;
  margin-right: -10px;
  background-color: transparent;

  img {
    width: 16px;
    height: 16px;
    opacity: 0.5;
  }

  :hover {
    background-color: ${cores.corFundo};
  }

  &#important {
    img {
      width: 18px;
      height: 18px;
    }
  }
`
export const Remetente = styled.div`
  justify-content: flex-start;
  display: flex;
  align-items: center;
  // padding-left: 10px;
  padding-right: 22px;
  width: 199px;
  span {
    font-weight: 500;
    font-size: 14px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`
export const TextoEmail = styled.div`
  display: flex;
  align-items: center;
  // margin-right: 140px;
  width: 1000px;
`

export const Titulo = styled.span`
  font-weight: 500;
  font-size: 14px;
  white-space: nowrap;
  flex-shrink: 0;
`
export const Conteudo = styled.span`
  color: ${cores.corTextSecudario};
  margin-left: 5px;
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex-grow: 1;
`
export const Data = styled.div`
  // background-color: ${cores.corTextSecudario};
  width: 140px;
  display: flex;
  align-items: center;
  justify-content: end;
  padding-right: 10px;

  span {
    font-size: 12px;
    font-weight: 500;
  }
`
