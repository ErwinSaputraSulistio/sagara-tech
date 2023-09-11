import { useContext } from 'react'
import { GlobalContext } from '../contexts/globalContext'

const useTaskContext = (action) => {
  const { 
    taskList, 
    setTaskList 
  } = useContext(GlobalContext)

  const saveTaskListToLocalStorage = (tasks) => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }
  const getTaskListFromLocalStorage = (tasks) => {
    const taskListFromLocalStorage = JSON.parse(localStorage.getItem("tasks") || "[]")
    if(taskListFromLocalStorage.length > 0) {
      setTaskList(taskListFromLocalStorage)
    }
  }
  const createTask = (data) => {
    const { title, description } = data
    const updatedTaskList = [
      ...taskList,
      {
        id: taskList.length + 1,
        title,
        description,
        isCompleted: false
      }
    ]
    setTaskList(updatedTaskList)
    saveTaskListToLocalStorage(updatedTaskList)
  }
  const updateCheckbox = (id) => {
    const taskIndex = taskList.findIndex((task) => {
      return task.id === id
    })
    if(taskIndex !== -1) {
      let updatedTaskList = taskList
      updatedTaskList[taskIndex].isCompleted = !updatedTaskList[taskIndex].isCompleted
      setTaskList(updatedTaskList)
      saveTaskListToLocalStorage(updatedTaskList)
    }
  }
  const deleteTask = (id) => {
    const updatedTaskList = taskList.filter((task) => {
      return task.id !== id
    })
    setTaskList(updatedTaskList)
    saveTaskListToLocalStorage(updatedTaskList)
  }

  if(action === 'checkbox') {
    return updateCheckbox
  }
  else if(action === 'delete') {
    return deleteTask
  }
  else if(action === 'create') {
    return createTask
  }
  else if(action === 'recovery') {
    return getTaskListFromLocalStorage
  }
  else {
    return null
  }
}

export default useTaskContext