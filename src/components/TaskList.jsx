import styles from '../styles/components/TaskList.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons'
import TaskCard from './TaskCard'
import { useContext, useState } from 'react'
import { GlobalContext } from '../configs/contexts/globalContext'
import { usePopup } from '../configs/custom-hooks'

const TaskList = () => {
  const [pagination, setPagination] = useState({
    currentPage: 1,
    dataShown: 5
  })
  const { taskList } = useContext(GlobalContext)
  const openPopup = usePopup('open')

  const changePagination = (action) => {
    const { currentPage, dataShown } = pagination
    if(action === 'left' && currentPage > 1) {
      setPagination({
        currentPage: currentPage - 1,
        dataShown
      })
    }
    else if(action === 'right') {
      const currentPagination = currentPage * dataShown
      if(currentPagination < taskList.length) {
        setPagination({
          currentPage: currentPage + 1,
          dataShown
        })
      }
    }
  }

  return(
    <>
      <div className={ styles.taskListTop }>
        <span className={ styles.taskListTopTitle }>Task List</span>
        <div 
          className={ styles.taskListTopAdd }
          onClick={ () => { openPopup('Form', null) } }
        >
          <FontAwesomeIcon icon={ faPlus } inverse size="2x"/>
        </div>
      </div>
      <div className={ styles.taskListBottom }>
        <div className={ styles.taskListBottomCards }>
          {
            taskList.slice((
              (pagination.currentPage - 1) * pagination.dataShown), 
              (pagination.currentPage * pagination.dataShown)
            ).map((task) => {
              return(
                <TaskCard 
                  data={ task }
                  key={ task.id }
                />
              )
            })
          }
        </div>
        <div className={ styles.taskListBottomPagination }>
          <div 
            className={
              pagination.currentPage > 1 ?
              styles.taskListBottomPaginationArrow
              :
              styles.taskListBottomPaginationArrowDisabled
            }
            onClick={ () => { changePagination('left') } }
          >
            <FontAwesomeIcon icon={ faCaretLeft }/>
          </div>
          <div className={ styles.taskListBottomPaginationNumber }>
            { pagination.currentPage }
          </div>
          <div 
            className={ 
              ((pagination.currentPage * pagination.dataShown) < taskList.length) ?
              styles.taskListBottomPaginationArrow
              :
              styles.taskListBottomPaginationArrowDisabled
            }
            onClick={ () => { changePagination('right') } }
          >
            <FontAwesomeIcon icon={ faCaretRight }/>
          </div>
        </div>
      </div>
    </>
  )
}

export default TaskList