
import {
  Box, Button, Paper, Typography 
} from '@mui/material'
import { format } from 'date-fns'
import { useEffect, useState } from 'react'

import { ImageUpload } from '../../../../common/components/ImageUpload'
import { useAuth } from '../../../../common/store/auth'
import { useGetUser, usePutUser } from '../../../../modules/user/query'
import type { User } from '../../../../common/dto'
import type { ChangeEvent, FC } from 'react'

interface Props {
  id?: string;
}
export const UserPanel: FC<Props> = ({ id }) => {
  const [user, setUser] = useState<User | null | undefined>(null)
  const { user: authUser } = useAuth()
  const { data, refetch } = useGetUser(id)

  const putUser = usePutUser()

  const handleChangeAvatar = (e: ChangeEvent<HTMLInputElement>) => {
    if (authUser == null) return
    if (e.target.files) {
      const file = e.target.files[0]
      putUser.mutate({ id: authUser.id, image: file }, { onSuccess: () => refetch() })
    }
  }

  useEffect(() => {
    if (id != null && String(authUser?.id) == id) {
      setUser(authUser)
      return
    }
    refetch()
    setUser(data)
  }, [id])

  useEffect(() => setUser(data), [data])

  return (
    <Paper
      style={{ backgroundColor: '#1976D2', color: '#fff', borderRadius: '0' }}
    >
      <Box display="flex" flexDirection="row" alignItems="center">
        <ImageUpload  src={`${import.meta.env.VITE_APP_API_URL}file/${data?.avatarPath}` ?? ''} onChange={handleChangeAvatar} />
        <Box flexDirection="column">
          <Typography variant="h5">Логин</Typography>
          <Typography variant="body1">{user?.login}</Typography>
          <Typography variant="h5">Email</Typography>
          <Typography variant="body1">{user?.email}</Typography>
          <Typography variant="h5">Дата регистрации</Typography>
          <Box display="flex" gap="2rem">
            <Typography>
              {user?.createdAt ? format(user?.createdAt, 'dd.MM.yyyy') : ''}
            </Typography>
            {authUser?.id === user?.id && (
              <Button style={{ backgroundColor: '#03ADE3' }}>
                Редактировать
              </Button>
            )}
          </Box>
        </Box>
      </Box>
      <Box
        display="flex"
        width="100%"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="h4">Мои статьи</Typography>
      </Box>
    </Paper>
  )
}
