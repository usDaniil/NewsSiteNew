import {
  Box, Button, Dialog, TextField, Typography 
} from '@mui/material'
import { FC } from 'react'

interface Props {
    onClose: () => void
    open: boolean
}
export const LoginModal:FC<Props> = ({ onClose, open }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <Box display='flex' flexDirection="column" width='300px' height='300px' alignItems='center' padding='2rem' gap='2rem'>
        <Typography>Авторизация</Typography>
        <TextField placeholder="Логин" />
        <TextField placeholder="Пароль" />
        <Button variant='contained'>Войти</Button>
      </Box>
    </Dialog>
  )
}
