import baseApiService from '../../common/config/axios'
import type { User, UserDto } from '../../common/dto'

export const Service = {
  getUser: (id: string | undefined): Promise<User> =>
    baseApiService.get(`users/${id}`),

  putUser: (data: UserDto): Promise<User> => {
    const form = new FormData()
    data.login && form.append('login', data.login)
    data.currentPassword && form.append('currentPassword', data.currentPassword)
    data.newPassword && form.append('newPassword', data.newPassword)
    data.image && form.append('image', data.image)
    baseApiService.put(`users/${data.id}`, form)}
}
