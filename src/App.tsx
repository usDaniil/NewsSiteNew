import { RouterProvider } from 'react-router-dom'
import './App.css'
import { routes } from './common/config/routeConfig'
import { QueryClientProvider } from 'react-query'
import { queryClient } from './common/config/react-query'
import { Auth } from './common/auth/auth'

function App() {
  return (
    <Auth>
    <QueryClientProvider client={queryClient}>
    <RouterProvider router={routes}/>
    </QueryClientProvider>
    </Auth>
  )
}

export default App
