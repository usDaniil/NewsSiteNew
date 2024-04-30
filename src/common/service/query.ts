import { useMutation } from 'react-query'

import { UseMutate } from '../config/react-query'
import { RegisterDto } from '../dto'

import { Service } from './service'


export const useRegister = (): UseMutate<RegisterDto> => {
  return useMutation(Service.register)
}
