import React from 'react'
import Header from './components/Header'
import Sobre from './components/Sobre'
import { GlobalStyle } from './styles'
import * as S from './styles'

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Header />
        <S.MainContainer>
          <Sobre />
          {/* <BarraLateral />
          <CaixaDeEmails />
          <BarraUtilidades /> */}
        </S.MainContainer>
      </div>
    </>
  )
}

export default App
