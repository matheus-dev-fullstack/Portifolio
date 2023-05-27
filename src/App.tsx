import React from 'react'
import Header from './components/Header'
import BarraLateral from './components/BarraFiltragem'
import { GlobalStyle } from './styles'
import CaixaDeEmails from './containers/CaixaDeEmails'
import * as S from './styles'
import BarraUtilidades from './components/BarraUtilidades'

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Header />
        <S.MainContainer>
          <BarraLateral />
          <CaixaDeEmails />
          <BarraUtilidades />
        </S.MainContainer>
      </div>
    </>
  )
}

export default App
