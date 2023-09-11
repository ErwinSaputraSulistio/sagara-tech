import React, { useState } from 'react'

export const GlobalContext = React.createContext()

export const GlobalContextProvider = ({ children }) => {
  const [taskList, setTaskList] = useState([])
  const [taskPopup, setTaskPopup] = useState({
    type: null,
    data: null
  })
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  return(
    <GlobalContext.Provider
      value={{
        taskList,
        setTaskList,
        taskPopup,
        setTaskPopup,
        isPopupOpen,
        setIsPopupOpen
      }}
    >
      { children }
    </GlobalContext.Provider>
  )
}