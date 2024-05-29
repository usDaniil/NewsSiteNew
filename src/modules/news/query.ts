import { useMutation, useQuery } from 'react-query'

import { NewsProvider } from '../../common/components/NewsProvider'
import { Service } from './service'
import { useNewsStore } from './store'
import type { CreateNews, News } from './dto'
import type { UseMutate, UseQuery } from '../../common/config/react-query'

export const useGetNews = (): UseQuery<News[]> =>
  useQuery(['NEWS'], () => Service.getNews(), {
    enabled:  false,
    onSettled: () => useNewsStore.getState().api.setIsLoading(true),
    onSuccess: (data) => {
      const { api } = useNewsStore.getState()
      api.setNews(data)
    }
  })

export const useCreateNews = (): UseMutate<CreateNews> =>
  useMutation((data: CreateNews) => Service.createNews(data), {
    onSuccess: () => {
      NewsProvider({})
    } 
  })

export const useNewsById = (id: string):UseQuery<News> => useQuery(['NEWS_BY_ID'],() => Service.getNewsById(id))
