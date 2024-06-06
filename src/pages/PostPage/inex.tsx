import ArticleIcon from '@mui/icons-material/Article'
import {
  Box, Button, Fab, Typography 
} from '@mui/material'
import { openModal } from 'common/components/openModal'
import { format } from 'date-fns'
import { useNewsById, useRetelling } from 'modules/news/query'
import { useNavigate, useParams } from 'react-router-dom'
import { TopPanel } from '../../common/components/TopPanel'
import { RetellingModal } from './modals/RetellingModal'
import type { FC } from 'react'

export const PostPage: FC = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const retelling = useRetelling()
  const { data, isLoading }  = useNewsById(id ?? '')

  const handleRetelling = () => {

    retelling.mutate(data?.text, { onSuccess: (data)=>openModal(RetellingModal, { text: data, isLoading: retelling.isLoading }) })
    openModal(RetellingModal, { text: '', isLoading: true })
  }

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
        <Fab 
          style={{ position: 'fixed', bottom: '4rem', right: '5rem' }} 
          color="primary" 
          aria-label="add" 
          onClick={handleRetelling} >
          <ArticleIcon/></Fab>

      </Box>
    </>)
}
