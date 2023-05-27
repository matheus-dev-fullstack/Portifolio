import * as S from './styles'
import seta from '../../assets/seta.png'
import reload from '../../assets/reload.png'
import more from '../../assets/more3points.png'
import pastas from '../../assets/pastas.png'
import { Button } from '../../styles'
import previous from '../../assets/fowardpage.png'
import next from '../../assets/nextpage.png'

const HeaderIndex = () => {
  return (
    <S.Div>
      <S.DivButtons>
        <S.ButtonBox id="first-child">
          <input type="checkbox" />
        </S.ButtonBox>
        <S.ButtonBox id="last-child">
          <img src={seta} alt="" />
        </S.ButtonBox>
        <S.ButtonCircle>
          <img src={reload} alt="" />
        </S.ButtonCircle>
        <S.ButtonCircle>
          <img src={more} alt="" />
        </S.ButtonCircle>
      </S.DivButtons>
      <S.DivButtons>
        <span>1-50 de 4.060</span>
        <S.ButtonCircle>
          <img src={previous} alt="" />
        </S.ButtonCircle>
        <S.ButtonCircle id="pages">
          <img src={next} alt="" />
        </S.ButtonCircle>
        <S.ButtonBox>
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
