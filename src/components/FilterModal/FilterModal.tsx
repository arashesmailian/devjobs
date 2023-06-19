import React, {useEffect, useRef} from 'react'
import {createPortal} from 'react-dom'
import {ModalContainer} from './FilterModal.styled'

interface IModal {
  isOpen: boolean
  children: React.ReactNode
}

const FilterModal: React.FC<IModal> = ({children, isOpen}) => {
  const ref = useRef(null)
  if (!ref.current) {
    ref.current = document.createElement('div')
  }

  useEffect(() => {
    const modalRoot = document.getElementById('modal')
    modalRoot.appendChild(ref.current)
    document.getElementById('root').style.filter = 'brightness(60%)'

    return () => {
      modalRoot.removeChild(ref.current)
      document.getElementById('root').style.filter = ''
    }
  }, [])

  return createPortal(
    <ModalContainer isOpen={isOpen}>{children}</ModalContainer>,
    ref.current
  )
}

export default FilterModal
