import * as S from './styles'
const Header = () => {
  return (
    <S.Header>
      <S.Container>
        <S.TitleName>Matheus Oliveira</S.TitleName>
        <nav>
          <S.Links>
            <S.LintItem>
              <S.Link href="#">Sobre</S.Link>
            </S.LintItem>
            <S.LintItem>
              <S.Link href="#">Competências</S.Link>
            </S.LintItem>
            <S.LintItem>
              <S.Link href="#">Projetos</S.Link>
            </S.LintItem>
          </S.Links>
        </nav>
      </S.Container>
    </S.Header>
  )
}

export default Header
