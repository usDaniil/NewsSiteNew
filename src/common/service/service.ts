import baseApiService from '../config/axios'
import { RegisterAnswerDto, RegisterDto } from '../dto'



export const Service = {
  register: (data: RegisterDto): Promise<RegisterAnswerDto> => {
    return baseApiService.post('auth/register/', data)
  }
}
