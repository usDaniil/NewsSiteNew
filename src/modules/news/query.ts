import { useQuery } from 'react-query'

import { UseQuery } from '../../common/config/react-query'

import { News } from './dto'
import { Service } from './service'

export const useGetNews= ():UseQuery<News[]>  => {
  return useQuery(['NEWS'], () => Service.getNews())
}
