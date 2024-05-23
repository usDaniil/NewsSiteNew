import { RouterProvider } from 'react-router-dom'

import './App.css'
import { QueryClientProvider } from 'react-query'

import { Auth } from './common/auth/auth'
import { OpenModal } from './common/components/openModal'
import { queryClient } from './common/config/react-query'
import { routes } from './common/config/routeConfig'

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
