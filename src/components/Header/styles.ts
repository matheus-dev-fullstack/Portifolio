import styled, { css } from 'styled-components'
import { Button, cores } from '../../styles'

export const Header = styled.header`
  background-color: #f2f2f2;
  height: 63px;
  ${css`
    position: fixed;
    top: 0;
    width: 100%;
  `}
`
export const Container = styled.div`
  // background-color:;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  padding: 8px;
`
export const ButtonMenu = styled(Button)`
  margin: 0 5px;

  img {
    width: 48%;
    height: 48%;
  }
`
export const ButtonPesquisa = styled(Button)`
  margin: 0 2px 0 6px;
  background-color: ${cores.corSecundaria};
  height: 35px;
  width: 35px;

  :hover {
    background-color: #cccccc;
  }

  img {
    width: 50%;
    height: 50%;
  }
`
export const ButtonAjustes = styled(ButtonPesquisa)`
  height: 40px;
  width: 40px;
  margin: 0 8px 0 2px;

  img {
    width: 60%;
    height: 60%;
  }
`
export const ButtonsEnd = styled(ButtonAjustes)`
  background-color: ${cores.corFundo};
  margin: 0 2px 0 2px;
  img {
    width: 55%;
    height: 55%;
  }
`
export const DivStart = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  // margin-left:1px;
  padding: 0px 30px 0px 0px;
  gap: 2px;
  width: 240px;
`

export const DivMiddle = styled.div`
  padding: 0 30px 0 8px;
  height: 47px;
  border-radius: 27px;
  margin-right: auto;
`
export const BarraDeBusca = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${cores.corSecundaria};
  height: 47px;
  border-radius: 24px;
`
export const Input = styled.input`
  align-items: center;
  margin: 0 96px 0 0px;
  height: 20px;
  width: 530px;
  border: none;
  background-color: ${cores.corSecundaria};
  padding: 0;
  font-size: 16px;
  outline: none;

  ::placeholder {
    color: #404040;
    font-family: sans-serif;
  }
`
export const DivEnd = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 45px;

  #imgPerfil {
    width: 35px;
    margin-right: 4px;
    margin-left: 4px;
  }
`
