import baseApiService from '../../common/config/axios'

import type { CreateNews, News } from './dto'

export const Service = { 
  getNews: (): Promise<News[]> => baseApiService.get('news'), 

  createNews: (data: CreateNews): Promise<News> => {
    const form = new FormData()
    form.append('header', data.header)
    form.append('text', data.text)
    form.append('image', data.image)
    form.append('userId', data.userId)
    return baseApiService.post('news', form)},

  getNewsById: (id: string): Promise<News> => baseApiService.get(`news/${id}`)

}

