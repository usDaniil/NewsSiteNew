import { useQuery } from 'react-query'

import { Service } from './service'
import type { News } from './dto'
import type { UseQuery } from '../../common/config/react-query'


export const useGetNews= ():UseQuery<News[]>  => useQuery(['NEWS'], () => Service.getNews())
