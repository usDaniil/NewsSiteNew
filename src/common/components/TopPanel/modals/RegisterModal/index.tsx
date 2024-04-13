import { Box, Dialog, TextField, Typography } from "@mui/material";
import {  FC, useState } from "react";
import { useRegister } from "../../../../service/query";
import { RegisterAnswerDto } from "../../../../service/dto";
import { LoadingButton } from "@mui/lab";

interface Props {
    onClose: () => void
    open: boolean
}
export const RegisterModal:FC<Props> = ({onClose, open}) => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const register = useRegister()
    
    const handleSubmit = () => {
        register.mutate({login, password, email}, {onSuccess: (data)=> {
            const answer = data as RegisterAnswerDto
            localStorage.setItem('token', answer.accessToken)
            onClose()
        }})
    }
    return(
        <Dialog open={open} onClose={onClose}>
            <Box display='flex' flexDirection="column" width='400px' height='400px' alignItems='center' padding='2rem' gap='2rem'>
                <Typography>Регистрация</Typography>
                <TextField onChange={({target})=>setLogin(target.value)} placeholder="Логин" />
                <TextField onChange={({target})=>setEmail(target.value)} placeholder="Почта" />
                <TextField onChange={({target})=>setPassword(target.value)} placeholder="Пароль" />
                <LoadingButton loading={register.isLoading} onClick={handleSubmit} variant='contained'>Войти</LoadingButton >
            </Box>
        </Dialog>
    )
}