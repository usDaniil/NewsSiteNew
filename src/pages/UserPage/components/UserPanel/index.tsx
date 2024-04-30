import { Image } from '@mui/icons-material'
import {
  Box, Button, Paper, Typography 
} from '@mui/material'
import { FC, useEffect, useState } from 'react'
import { format } from 'date-fns'

import { useAuth } from '../../../../common/store/auth'
import { useGetUser } from '../../../../modules/user/query'
import { User } from '../../../../common/dto'

interface Props {
    id: string
}
export const UserPanel:FC<Props> = ({ id }) => {
  const [user, setUser] = useState<User | null | undefined>(null)
  const { user: authUser } = useAuth()
  const { data, refetch } = useGetUser(id, false)

  useEffect(()=> {
    if (id != null && String(authUser?.id) == id) {
      setUser(authUser)
      return
    }
    refetch()
    setUser(data)
  }, [])

  useEffect(()=>setUser(data), [data] )
  return (
    <Paper style={{ backgroundColor: '#1976D2', color: '#fff', borderRadius: '0' }}>
      <Box display="flex" flexDirection="row" alignItems="center">
        <Image style={{ width: '400px', height: '400px', display: 'block' }} />
        <Box flexDirection="column">
          <Typography variant="h5">Логин</Typography>
          <Typography variant="body1">{user?.login}</Typography>
          <Typography variant="h5">Email</Typography>
          <Typography variant="body1">{user?.email}</Typography>
          <Typography variant="h5">Дата регистрации</Typography>
          <Box display="flex" gap="2rem">
            <Typography>{user?.createdAt ? format(user?.createdAt, 'dd.MM.yyyy'): ''}</Typography> 
           { authUser?.id === user?.id && <Button style={{ backgroundColor: '#03ADE3' }}>Редактировать</Button>}
          </Box>
        </Box>
      </Box>
      <Box display="flex" width="100%" alignItems="center" justifyContent="center"><Typography variant="h4">Мои статьи</Typography></Box>
    </Paper>)
}
