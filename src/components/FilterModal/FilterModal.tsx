import React, {ReactNode, useEffect, useRef} from 'react'
import {createPortal} from 'react-dom'
import {ModalContainer} from './FilterModal.styled'

const FilterModal = ({children}: {children: ReactNode}) => {
  const ref = useRef(null)
  if (!ref.current) {
    ref.current = document.createElement('div')
  }

  useEffect(() => {
    const modalRoot = document.getElementById('modal')
    modalRoot.appendChild(ref.current)

    return () => modalRoot.removeChild(ref.current)
  }, [])

  return (
    <>
      {createPortal(<ModalContainer>{children}</ModalContainer>, ref.current)}
    </>
  )
}

export default FilterModal
