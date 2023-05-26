import { Button } from '../../styles'
import * as S from './styles'
import calendar from '../../assets/calendar.png'
import keep from '../../assets/keep.png'
import tasks from '../../assets/tasks.png'
import contats from '../../assets/contacts.png'

const BarraUtilidades = () => {

    return (
        <S.BarraLateral>
            <Button title='Suporte'>
                <img src={calendar} alt="" />
            </Button>
            <Button title='Configurações'>
                <img src={keep} alt="" />
            </Button>
            <Button title='Google Apps'>
                <img src={tasks} alt="" />
            </Button>
            <Button title='Google Apps'>
                <img src={contats} alt="" />
            </Button>
        </S.BarraLateral>
    )
} 

export default BarraUtilidades
