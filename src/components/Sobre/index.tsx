import * as S from './styles'

const Sobre = () => {
  return (
    <S.Section id="sobre">
      {/* <S.Title>Sobre</S.Title> */}
      <S.Container>
        <S.InfosDiv>
          <S.Saudacao>Olá, eu sou Matheus,</S.Saudacao>
          <S.Formacao>
            Front end Developer <br />E estudante de Engenharia de Software{' '}
          </S.Formacao>
        </S.InfosDiv>
        <S.InfosDiv>
          <S.ImgPerfil
            src="https://www.danielluna.com.br/public/posts/mrrobot/mr-robot.png"
            alt=""
          />
        </S.InfosDiv>
      </S.Container>
    </S.Section>
  )
}

export default Sobre
