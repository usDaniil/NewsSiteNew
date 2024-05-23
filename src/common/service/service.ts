import baseApiService from '../config/axios'
import type { RegisterAnswerDto, RegisterDto } from '../dto'



export const Service = { register: (data: RegisterDto): Promise<RegisterAnswerDto> => baseApiService.post('auth/register/', data) }
