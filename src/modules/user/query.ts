import { useQuery } from 'react-query'

import { Service } from './service'
import type { UseQuery } from '../../common/config/react-query'
import type { User } from '../../common/dto'


export const useGetUser= (id:string|undefined, enabled?:boolean):UseQuery<User>  => useQuery(['USERS'], () => Service.getUser(id), { enabled })
