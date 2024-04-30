import {
  Box, Dialog, TextField, Typography 
} from '@mui/material'
import {  FC, useState } from 'react'
import { LoadingButton } from '@mui/lab'

import { useRegister } from '../../../../service/query'
import { RegisterAnswerDto } from '../../../../dto'
import { useAuth } from '../../../../store/auth'

interface Props {
    onClose: () => void
    open: boolean
}
export const RegisterModal:FC<Props> = ({ onClose, open }) => {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const { api } = useAuth()
  const register = useRegister()
    
  const handleSubmit = () => {
    register.mutate({ login, password, email }, {
      onSuccess: (data)=> {
        const answer = data as RegisterAnswerDto
        localStorage.setItem('token', answer.accessToken)
        api.setUser(answer.user)
        onClose()
      } 
    })
  }
  return (
    <Dialog open={open} onClose={onClose}>
      <Box display='flex' flexDirection="column" width='400px' height='400px' alignItems='center' padding='2rem' gap='2rem'>
        <Typography>Регистрация</Typography>
        <TextField onChange={({ target })=>setLogin(target.value)} placeholder="Логин" />
        <TextField onChange={({ target })=>setEmail(target.value)} placeholder="Почта" />
        <TextField onChange={({ target })=>setPassword(target.value)} placeholder="Пароль" />
        <LoadingButton loading={register.isLoading} onClick={handleSubmit} variant='contained'>Регистрация</LoadingButton >
      </Box>
    </Dialog>
  )
}
