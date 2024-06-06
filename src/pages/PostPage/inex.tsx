import { Box, Button, Typography } from '@mui/material'
import { format } from 'date-fns'
import { useNewsById } from 'modules/news/query'
import { useNavigate, useParams } from 'react-router-dom'
import { TopPanel } from '../../common/components/TopPanel'
import type { FC } from 'react'


export const PostPage: FC = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { data, isLoading }  = useNewsById(id ?? '')


  return (
    <>
      <TopPanel />
      <Box padding='4rem'>
        <Box
          height="100%"
          gap="1rem"
          flexDirection="column"
          style={{ backgroundColor: 'white', padding: '1rem', color: 'black' }}
          display="flex"
          borderRadius='1rem'
        >
          <Box
            display="flex"
            width="100%"
            alignItems="center"
            justifyContent="center"
          >
            <Typography
              fontWeight="bold"
              style={{ alignItems: 'center' }}
              variant="h3"
              color="black"
            >
              {data?.header}
            </Typography>
          </Box>
          <Box display="flex" alignItems="start">
            <Box display="flex" flexDirection="column">
              <img
                src={`${import.meta.env.VITE_APP_API_URL}file/${data?.imagePath}`}
                style={{ width: '400px', height: '400px', display: 'block' }}
              />
              <Box display="flex" justifyContent="space-evenly">
                <Typography 
                  textAlign='center' 
                  display='flex' 
                  justifyContent='center' 
                  alignItems='center'>
                  {`Создано: ${data?.createdAt ? format(new Date(data?.createdAt), 'dd.MM.yyyy HH:mm') : ''}`}
                </Typography>
                <Box justifyContent='center' alignItems='center' display='flex' flexDirection='row'>
                  <Typography>{'Автор: '}</Typography>
                  <Button onClick={()=> navigate(`/user/${data?.user.id}`)}>{data?.user.login}</Button>
                </Box>
              </Box>
            </Box>
          </Box>
          <Typography>
            {data?.text}
          </Typography>
        </Box>
      </Box>
    </>)
}
