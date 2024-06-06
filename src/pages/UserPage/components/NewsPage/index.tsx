import AddIcon from '@mui/icons-material/Add'
import {
  Box, Button, Card, Paper, Stack, Typography 
} from '@mui/material'

import { LoaderWrapper } from 'common/components/LoaderWrapper'
import { openModal } from '../../../../common/components/openModal'
import { useAuth } from '../../../../common/store/auth'
import { useNewsStore } from '../../../../modules/news/store'
import { NewsCard } from '../../../../modules/news/ui/NewsCard'
import { CreateNewsModal } from '../../modals/CreateNewsModal'
import type { FC } from 'react'

interface Props {
  id: string;
}
export const NewsPage: FC<Props> = ({ id }) => {
  const { user: authUser } = useAuth()
  const { news, isLoading } = useNewsStore()

  return (
    <LoaderWrapper isLoading={isLoading}>
      <Paper style={{ background: '#242424' }}>
        <Stack
          direction="row"
          padding="1rem"
          justifyContent="space-between"
          gap="1rem"
          flexWrap="wrap"
          maxHeight="400px"
          style={{
            overflowX: 'scroll',
            msOverflowY: 'hidden',
            overflow: 'scroll',
            scrollbarWidth: 'none'
          }}
        >
          {String(authUser?.id) === id && (
            <Box>
              <Card
                sx={{
                  width: 345,
                  height: 343.91,
                  maxWidth: 345,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column'
                }}
              >
                <Typography
                  style={{ whiteSpace: 'pre-line', textAlign: 'center' }}
                  variant="h4"
                  marginTop="2rem"
                >
                  {'Добавить \n статью'}
                </Typography>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  width="100%"
                  height="100%"
                >
                  <Button
                    onClick={() => openModal(CreateNewsModal, {})}
                    style={{ width: '96px', height: '96px' }}
                  >
                    <AddIcon style={{ scale: '4' }} />
                  </Button>
                </Box>
              </Card>
            </Box>
          )}
          {news?.map((value) => 
            String(value.user.id) === String(id) &&
            <NewsCard
              description={value.text}
              title={value.header}
              author={value.user.login}
              date={value.createdAt}
              imagePath={value.imagePath}
              userId={value.user.id}
              id={value.id}
            />)}
        </Stack>
      </Paper>
    </LoaderWrapper>
  )
}
