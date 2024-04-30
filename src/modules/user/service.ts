
import baseApiService from '../../common/config/axios'
import { User } from '../../common/dto'


export const Service = {
  getUser: (id:string| undefined): Promise<User> => {
    return baseApiService.get(`users/${id}`)
  }
}
