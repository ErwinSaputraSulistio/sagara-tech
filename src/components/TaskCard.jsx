import styles from '../styles/components/TaskCard.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { usePopup, useTaskContext } from '../configs/custom-hooks'


const TaskCard = ({ data }) => {
  const openPopup = usePopup('open')
  const updateCheckbox = useTaskContext('checkbox')

  return(
    <div className={ styles.taskCard }>
      <div className={ styles.taskCardCheckBox }>
        <input
          defaultChecked={ data.isCompleted }
          className={ styles.taskCardCheckBoxInput }
          onChange={ () => { updateCheckbox(data.id) } }
          type='checkbox'
        />
      </div>
      <div className={ styles.taskCardTitle }>{ data.title }</div>
      <div 
        className={ styles.taskCardSettings }
        onClick={ () => { openPopup('Detail', data) } }
      >
        <FontAwesomeIcon icon={ faInfoCircle }/>
      </div>
    </div>
  )
}

export default TaskCard