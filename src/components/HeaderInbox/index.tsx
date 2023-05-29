import * as S from './styles'
import seta from '../../assets/seta.png'
import reload from '../../assets/reload.png'
import more from '../../assets/more3points.png'
import pastas from '../../assets/pastas.png'
import previous from '../../assets/fowardpage.png'
import next from '../../assets/nextpage.png'

const HeaderIndex = () => {
  return (
    <S.Div>
      <S.DivButtons>
        <S.ButtonBox title="Selecionar" id="first-child">
          <input type="checkbox" />
        </S.ButtonBox>
        <S.ButtonBox title="Selecionar" id="last-child">
          <img src={seta} alt="" />
        </S.ButtonBox>
        <S.ButtonCircle title="Atualizar">
          <img src={reload} alt="" />
        </S.ButtonCircle>
        <S.ButtonCircle title="Mais">
          <img src={more} alt="" />
        </S.ButtonCircle>
      </S.DivButtons>
      <S.DivButtons>
        <span>1-50 de 4.060</span>
        <S.ButtonCircle title="Próximas">
          <img src={previous} alt="" />
        </S.ButtonCircle>
        <S.ButtonCircle title="Anteriores" id="pages">
          <img src={next} alt="" />
        </S.ButtonCircle>
        <S.ButtonBox title="Alternar modo de painel de divisão">
          <img src={pastas} alt="" />
        </S.ButtonBox>
        <S.ButtonBox id="end">
          <img src={seta} alt="" />
        </S.ButtonBox>
      </S.DivButtons>
    </S.Div>
  )
}

export default HeaderIndex
