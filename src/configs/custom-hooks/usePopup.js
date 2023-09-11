import { useContext } from 'react'
import { GlobalContext } from '../contexts/globalContext'

const usePopup = (action) => {
  const { setIsPopupOpen, setTaskPopup } = useContext(GlobalContext)

  const openPopup = (type, data) => {
    setIsPopupOpen(true)
    setTaskPopup({ 
      type,
      data
    })
  }
  const closePopup = () => {
    setIsPopupOpen(false)
    setTimeout(() => {
      setTaskPopup({
        type: null,
        data: null
      })
    }, 500)
  }

  if(action === 'open') {
    return openPopup
  }
  else if(action === 'close') {
    return closePopup
  }
  else {
    return null
  }
}

export default usePopup