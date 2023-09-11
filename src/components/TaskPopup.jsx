import styles from '../styles/components/TaskPopup.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose, faTrash } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react'
import { GlobalContext } from '../configs/contexts/globalContext'
import { usePopup, useTaskContext } from '../configs/custom-hooks'
import TaskForm from './TaskForm'

const TaskPopup = () => {
  const { isPopupOpen, taskPopup } = useContext(GlobalContext)
  const closePopup = usePopup('close')
  const deleteTask = useTaskContext('delete')

  return(
    taskPopup.type ?
    <div className={`${styles.taskPopupContainer} ${
        isPopupOpen ? 
        styles.taskPopupContainerOpen 
        : 
        styles.taskPopupContainerClose
    }`}>
      <div className={`${styles.taskPopupWindow} ${ 
        isPopupOpen ? 
        styles.taskPopupWindowOpen 
        : 
        styles.taskPopupWindowClose 
      }`}>
        <div className={ styles.taskPopupWindowTop }>
          <div className={ styles.taskPopupWindowTitle }>
          { 
            (taskPopup.type === 'Detail' && taskPopup.data) ?
            taskPopup.data.title
            :
            'Create a new task'
          }
          </div>
          <div className={ styles.taskPopupWindowTopButtons }>
            {
              taskPopup.data &&
              <div
                className={ styles.taskPopupWindowDeleteTaskButton }
                onClick={ 
                  () => { 
                    deleteTask(taskPopup.data.id)
                    closePopup()
                  }
                }
              >
                <FontAwesomeIcon icon={ faTrash } inverse/>
              </div>
            }
            <div
              className={ styles.taskPopupWindowCloseButton }
              onClick={ () => { closePopup() } }
            >
              <FontAwesomeIcon icon={ faClose } inverse/>
            </div>
          </div>
        </div>
        <div className={ styles.taskPopupWindowBottom }>
          <div className={ styles.taskPopupWindowDescription }>
            { 
              (taskPopup.type === 'Detail' && taskPopup.data) ?
              taskPopup.data.description
              :
              <TaskForm/>
            }
          </div>
        </div>
      </div>
    </div>
    :
    null
  )
}

export default TaskPopup