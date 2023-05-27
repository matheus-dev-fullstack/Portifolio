import * as S from './styles'
import gmailInicio from '../../assets/logo_gmail_lockup_default_1x_r5.png'
import menuIcon from '../../assets/menu_icon-icons.com_72311.png'
import lupaIcon from '../../assets/lupa_icon.png'
import ajustes from '../../assets/ajustes_icon.png'
import configIcon from '../../assets/2config_icon.png'
import duvidasIcon from '../../assets/2perguntas_icon.png'
import maisIcon from '../../assets/o_grid_menu_icon_214235.png'
import perfil from '../../assets/perfil.png'
const Header = () => {
  return (
    <S.Header>
      <S.Container>
        <S.DivStart>
          <S.ButtonMenu title="Menu">
            <img src={menuIcon} alt="" />
          </S.ButtonMenu>
          <img src={gmailInicio} alt="gmail symbol" />
        </S.DivStart>
        <S.DivMiddle>
          <S.BarraDeBusca>
            <S.ButtonPesquisa title="Pesquisa">
              <img src={lupaIcon} alt="" />
            </S.ButtonPesquisa>
            <S.Input type="text" placeholder="Pesquisar e-mail" />
            <S.ButtonAjustes title="Mostrar opções da pesquisa">
              <img src={ajustes} alt="" />
            </S.ButtonAjustes>
          </S.BarraDeBusca>
        </S.DivMiddle>
        <S.DivEnd>
          <S.ButtonsEnd title="Suporte">
            <img src={duvidasIcon} alt="" />
          </S.ButtonsEnd>
          <S.ButtonsEnd title="Configurações">
            <img src={configIcon} alt="" />
          </S.ButtonsEnd>
          <S.ButtonsEnd title="Google Apps">
            <img src={maisIcon} alt="" />
          </S.ButtonsEnd>
          <S.ButtonsEnd id="perfil" title="perfil">
            <img src={perfil} id="imgPerfil" alt="Perfil" />
          </S.ButtonsEnd>
        </S.DivEnd>
      </S.Container>
    </S.Header>
  )
}

export default Header
