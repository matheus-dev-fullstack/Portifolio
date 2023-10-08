import styled from 'styled-components'
import { cores } from '../../styles'

export const Section = styled.section`
  width: 100%;
  margin-top: 80px;
`
export const Title = styled.h2`
  color: ${cores.branco};
  align-items: center;
`
export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const InfosDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto 0;
`
export const Saudacao = styled.p`
  font-family: 'Prompt', sans-serif;
  color: ${cores.branco};
  font-size: 44px;
  line-height: 46px;
  justify-content: start;
`
export const Formacao = styled.p`
  font-family: 'Megrim', cursive;
  color: ${cores.branco};
  font-size: 36px;
`
export const ImgPerfil = styled.img`
  height: 290px;
  width: 340px;
  object-fit: cover;
  border-radius: 6px;
`
