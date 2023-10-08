import React from 'react'
import Header from './components/Header'
import { GlobalStyle } from './styles'
import * as S from './styles'

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Header />
        <S.MainContainer>
          {/* <BarraLateral />
          <CaixaDeEmails />
          <BarraUtilidades /> */}
        </S.MainContainer>
      </div>
    </>
  )
}

export default App
