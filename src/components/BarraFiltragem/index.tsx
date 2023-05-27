import * as S from './styles'
import pencil from '../../assets/pencil.png'
import inbox from '../../assets/inbox_fill.png'
import star from '../../assets/star_fill.png'
import watch from '../../assets/time.png'
import send from '../../assets/send.png'
import draft from '../../assets/draft.png'
import expand from '../../assets/expand.png'
import more from '../../assets/more.png'
import { Button } from '../../styles'

const BarraLateral = () => {
  return (
    <S.Aside>
      <S.sendDiv>
        <S.sendButton>
          <img src={pencil} alt="lapis" />
          Escrever
        </S.sendButton>
      </S.sendDiv>
      <div>
        <S.ButtonAside className="active">
          <img src={inbox} alt="" />
          <p>Caixa de entrada</p>
          <span>246</span>
        </S.ButtonAside>
        <S.ButtonAside>
          <img src={star} alt="" />
          <p>Com estrela</p>
          <span></span>
        </S.ButtonAside>
        <S.ButtonAside>
          <img src={watch} alt="" />
          <p>Adiados</p>
          <span></span>
        </S.ButtonAside>
        <S.ButtonAside>
          <img src={send} alt="" />
          <p>Enviados</p>
          <span></span>
        </S.ButtonAside>
        <S.ButtonAside>
          <img src={draft} alt="" />
          <p>Rascunhos</p>
          <span>32</span>
        </S.ButtonAside>
        <S.ButtonAside>
          <img src={expand} alt="" />
          <p>Mais</p>
          <span></span>
        </S.ButtonAside>
      </div>
      <S.DivEnd>
        <h4>Marcadores</h4>
        <Button>
          <img src={more} alt="" />
        </Button>
      </S.DivEnd>
    </S.Aside>
  )
}

export default BarraLateral
