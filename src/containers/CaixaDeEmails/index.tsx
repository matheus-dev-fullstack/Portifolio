import * as S from './styles'
import HeaderInbox from '../../components/HeaderInbox'
import InboxButtons from '../../components/InboxButtons'
import Email from '../../components/Email'

const CaixaDeEmails = () => {
  return (
    <S.Container>
      <S.Header>
        <HeaderInbox />
        <InboxButtons />
      </S.Header>
      <S.Emails>
        <Email />
      </S.Emails>
    </S.Container>
  )
}

export default CaixaDeEmails
