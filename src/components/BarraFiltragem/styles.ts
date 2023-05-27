import styled, { css } from 'styled-components'
import { cores } from '../../styles'

export const Aside = styled.aside`
  // background-color: #81ecec;
  height: 100vh;
  width: 240px;
  ${css`
    position: fixed;
    width: 240px;
  `}
`
export const sendDiv = styled.div`
  padding: 0px;
  margin: 8px 0 14px;
  padding: 0 0 0 8px;
  height: 60px;
`

export const sendButton = styled.button`
  display: flex;
  align-items: center;
  padding: 0 24px 0 0;
  width: 138px;
  height: 57px;
  min-width: 96px;
  border-radius: 16px;
  border: none;
  background-color: #fff;

  color: #5f6368;
  font-size: 15px;
  font-weight: 500;

  img {
    margin: 16px;
  }

  box-shadow: 0px 1px 2px 0 rgba(60, 64, 67, 0.302),
    0 1px 3px 1px rgba(60, 64, 67, 0.149);

  :hover {
    box-shadow: 0.5px 2px 2.5px 0 rgba(20, 20, 20, 0.3),
      0 1px 3px 1px rgba(30, 30, 30, 0.3);
  }
`
export const Button = styled.button`
  display: flex;
  width: 240px;
  height: 32px;

  margin-left: 0px;
  align-items: center;
  justify-content: space-between;

  padding: 0 12px 0 26px;
  border: none;
  border-radius: 0 16px 16px 0;
  font-weight: 400;
  font-size: 0.875rem;

  :hover {
    background-color: ${cores.cinzaFraco};
  }

  span {
    color: #5f6368;
    font-size: 0.75rem;
  }

  p {
    margin-left: 18px;
    margin-right: auto;
  }

  &.active {
    background-color: ${cores.corSecundaria};
    font-weight: 500;

    span {
      font-weight: 500;
      color: #000;
    }
  }
`
export const ButtonActive = styled(Button)`
  background-color: ${cores.corSecundaria};
`
