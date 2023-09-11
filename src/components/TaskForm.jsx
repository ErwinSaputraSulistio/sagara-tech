import styles from '../styles/components/TaskForm.module.scss'
import { useRef } from 'react'
import { usePopup, useTaskContext } from '../configs/custom-hooks'

const TaskForm = () => {
  const titleRef = useRef()
  const descriptionRef = useRef()
  const createTask = useTaskContext('create')
  const closePopup = usePopup('close')

  const submitForm = (e) => {
    const data = {
      title: titleRef.current.value,
      description: descriptionRef.current.value
    }
    e.preventDefault()
    createTask(data)
    closePopup()
  }

  return(
    <form className={ styles.taskForm } onSubmit={ submitForm }>
      <label className={ styles.taskFormLabel } htmlFor="title">Title</label>
      <input className={ styles.taskFormInput } ref={ titleRef } type="title" required/>
      <label className={ styles.taskFormLabel } htmlFor="description">Description</label>
      <input className={ styles.taskFormInput } ref={ descriptionRef } type="description" required/>
      <button className={ styles.taskFormButton } type="submit">Add Task</button>
    </form>
  )
}

export default TaskForm