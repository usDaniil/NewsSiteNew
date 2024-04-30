import { createBrowserRouter } from 'react-router-dom'
import { Typography } from '@mui/material'

import { NeswPage } from '../../pages/NewsPage'
import { UserPage } from '../../pages/UserPage'
import { PostPage } from '../../pages/PostPage/inex'

export const routes = createBrowserRouter([

  {

    path: '/',
    element: <NeswPage />
  },
  { path: '/user/:id', element: <UserPage/> },
  {path: '/post/:id', element: <PostPage/>},
  { path: '*', element: <Typography>Страница не найдена!</Typography> }])
