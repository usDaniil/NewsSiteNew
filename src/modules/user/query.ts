import { useQuery } from 'react-query'

import { UseQuery } from '../../common/config/react-query'
import { User } from '../../common/dto'

import { Service } from './service'

export const useGetUser= (id:string|undefined, enabled?:boolean):UseQuery<User>  => {
  return useQuery(['USERS'], () => Service.getUser(id), { enabled })
}
