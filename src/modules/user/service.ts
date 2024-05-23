
import baseApiService from '../../common/config/axios'
import type { User } from '../../common/dto'


export const Service = { getUser: (id:string| undefined): Promise<User> => baseApiService.get(`users/${id}`) }
