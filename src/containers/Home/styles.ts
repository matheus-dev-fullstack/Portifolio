import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.div`
  background-color: #fdcb6e;
  max-width: 900px;
  height: 100vh;
  border-radius: 14px;
  margin: 0 52px 0 250px;
`
export const Header = styled.div`
  // position: fixed;
  // left: 250px;
  // right: 52px;
  background-color: ${cores.corPrincipal};
`
export const Emails = styled.div`
  background-color: ${cores.corSecundaria};
  overflow-y: scroll;
  height: 760px;
`
