import * as S from './styles'
import pencil from '../../assets/pencil.png'
import inbox from '../../assets/inbox_fill.png'
import star from '../../assets/star_fill.png'
import watch from '../../assets/time.png'
import send from '../../assets/send.png'
import draft from '../../assets/draft.png'
import expand from '../../assets/expand.png'

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
        <>
          <S.Button className="active">
            <img src={inbox} alt="" />
            <p>Caixa de entrada</p>
            <span>246</span>
          </S.Button>
          <S.Button>
            <img src={star} alt="" />
            <p>Com estrela</p>
            <span></span>
          </S.Button>
          <S.Button>
            <img src={watch} alt="" />
            <p>Adiados</p>
            <span></span>
          </S.Button>
          <S.Button>
            <img src={send} alt="" />
            <p>Enviados</p>
            <span></span>
          </S.Button>
          <S.Button>
            <img src={draft} alt="" />
            <p>Rascunhos</p>
            <span>32</span>
          </S.Button>
          <S.Button>
            <img src={expand} alt="" />
            <p>Mais</p>
            <span></span>
          </S.Button>
        </>
      </div>
    </S.Aside>
  )
}

export default BarraLateral
