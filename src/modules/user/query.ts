import { useMutation, useQuery } from 'react-query'

import { Service } from './service'
import type { UseMutate, UseQuery } from '../../common/config/react-query'
import type { User, UserDto } from '../../common/dto'

export const useGetUser = (
  id: string | undefined,
  enabled?: boolean
): UseQuery<User> =>
  useQuery(['USERS'], () => Service.getUser(id), { enabled })

export const usePutUser = (): UseMutate<UserDto> =>
  useMutation((user: UserDto) => Service.putUser(user))
