import { Button } from '../../styles'
import * as S from './styles'
import calendar from '../../assets/calendar.png'
import keep from '../../assets/keep.png'
import tasks from '../../assets/tasks.png'
import contats from '../../assets/contacts.png'
import more from '../../assets/Plus_icon-icons.com_71848.png'

const BarraUtilidades = () => {
  return (
    <S.BarraLateral>
      <Button title="Calendar">
        <img src={calendar} alt="" />
      </Button>
      <Button title="Arquivos">
        <img src={keep} alt="" />
      </Button>
      <Button title="Tarefas">
        <img src={tasks} alt="" />
      </Button>
      <Button title="Contatos">
        <img src={contats} alt="" />
      </Button>
      <Button id="more" title="Instalar complementos">
        <img src={more} alt="" />
      </Button>
    </S.BarraLateral>
  )
}

export default BarraUtilidades
