import React, {useEffect} from 'react'
import {Dialog} from './ModalWithDialog.styled'

export interface IDialogModal {
  children: React.ReactNode
  open?: boolean
  onClose?: any
}

const ModalWithDialog: React.FC<IDialogModal> = ({children, open, onClose}) => {
  return (
    <Dialog open={open} onClose={onClose}>
      {children}
    </Dialog>
  )
}

export default ModalWithDialog
