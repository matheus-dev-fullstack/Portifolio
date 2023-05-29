import * as S from './styles'
import inboxBlue from '../../assets/inbox-blue.png'
import promo from '../../assets/promo.png'
import social from '../../assets/social.png'

const InboxButtons = () => {
  return (
    <S.Div>
      <S.ButtonInbox className="active">
        <img src={inboxBlue} alt="" />
        Principal
      </S.ButtonInbox>
      <S.ButtonInbox>
        <img src={promo} alt="" />
        Promoções
      </S.ButtonInbox>
      <S.ButtonInbox>
        <img src={social} alt="" />
        Social
      </S.ButtonInbox>
    </S.Div>
  )
}

export default InboxButtons
