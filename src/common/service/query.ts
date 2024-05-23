import { useMutation } from 'react-query'

import { Service } from './service'
import type { UseMutate } from '../config/react-query'
import type { RegisterDto } from '../dto'



export const useRegister = (): UseMutate<RegisterDto> => useMutation(Service.register)
