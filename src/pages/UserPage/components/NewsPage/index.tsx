import AddIcon from '@mui/icons-material/Add'
import {
  Box, Button, Card, Paper, Stack, Typography
} from '@mui/material'

import { useAuth } from '../../../../common/store/auth'
import { NewsCard } from '../../../NewsPage/components/MainNews/components/NewsCard'
import type { FC } from 'react'

interface Props {
    id: string
}
export const NewsPage: FC<Props> = ({ id }) => {
  const { user: authUser } = useAuth()
  const arr: JSX.Element[] = []
  for (let i = 0; i < 20; i++) {
    arr.push(<NewsCard key={i} />)
  }
  return (
    <Paper style={{ background: '#242424' }}>
      <Stack direction='row'
        padding='1rem'
        justifyContent='space-between'
        gap='1rem'
        flexWrap='wrap'
        maxHeight="400px"
        style={{
          overflowX: 'scroll', msOverflowY: 'hidden', overflow: 'scroll', scrollbarWidth: 'none'
        }} >
        {String(authUser?.id) === id &&
                <Box>
                  <Card sx={{
                    width: 345,
                    height: 343.91,
                    maxWidth: 345,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column'
                  }}>
                    <Typography style={{ whiteSpace: 'pre-line', textAlign: 'center' }} variant="h4" marginTop="2rem">{'Добавить \n статью'}</Typography>
                    <Box display="flex" alignItems="center" justifyContent="center" width="100%" height="100%">
                      <Button style={{ width: '96px', height: '96px' }}> <AddIcon style={{ scale: '4' }} /> </Button>
                    </Box>

                  </Card>
                    
                </Box>}
        {arr.map((value) => value)}
      </Stack>
    </Paper>
  )
}
