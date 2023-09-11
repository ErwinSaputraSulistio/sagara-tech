import styles from '../styles/pages/Task.module.scss'
import { TaskPopup, TaskList } from '../components'
import { useEffect } from 'react'
import { useTaskContext } from '../configs/custom-hooks'

const Task = () => {
  const taskRecovery = useTaskContext('recovery')
  useEffect(() => { 
    taskRecovery()
  }, [])

  return(
    <div className={ styles.taskBackground }>
      <div className={ styles.taskContainer }>
        <TaskList/>
        <TaskPopup/>
      </div>
    </div>
  )
}

export default Task