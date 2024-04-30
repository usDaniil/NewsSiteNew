import { RouterProvider } from 'react-router-dom'

import './App.css'
import { QueryClientProvider } from 'react-query'

import { routes } from './common/config/routeConfig'
import { queryClient } from './common/config/react-query'
import { Auth } from './common/auth/auth'
import { OpenModal } from './common/components/openModal'

function App() {
  return (
    <Auth>
      <QueryClientProvider client={queryClient}>
        <OpenModal />
        <RouterProvider router={routes}/>
      </QueryClientProvider>
    </Auth>
  )
}

export default App
