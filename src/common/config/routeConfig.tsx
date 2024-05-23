import { Typography } from '@mui/material'
import { createBrowserRouter } from 'react-router-dom'

import { NeswPage } from '../../pages/NewsPage'
import { PostPage } from '../../pages/PostPage/inex'
import { UserPage } from '../../pages/UserPage'

export const routes = createBrowserRouter([

  {

    path: '/',
    element: <NeswPage />
  },
  { path: '/user/:id', element: <UserPage/> },
  { path: '/post/:id', element: <PostPage/> },
  { path: '*', element: <Typography>Страница не найдена!</Typography> }])
