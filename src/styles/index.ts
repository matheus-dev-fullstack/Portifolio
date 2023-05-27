import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'

export const cores = {
  corTexto: '#000',
  corFundo: '#f2f2f2',
  corSecundaria: '#d9d9d9',
  corPrincipal: '#f1f3f4',
  branco: '#fff',
  cinzaFraco: '#e6e6e6'
}

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;

    body{
      background-color:${cores.corPrincipal}
    }
  }
`
export const MainContainer = styled.div`
  margin-top: 63px;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
`
export const Button = styled.button`
  display: flex;
  border-radius: 50%;
  border: none;
  height: 45px;
  width: 45px;
  justify-content: center;
  align-items: center;
  background-color: ${cores.corFundo};

  :hover {
    background-color: #e6e6e6;
  }
  img {
    width: 50%;
    height: 50%;
  }
`
