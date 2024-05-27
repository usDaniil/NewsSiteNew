import { useEffect } from 'react'
import { useGetNews } from '../../../modules/news/query'
import type { FC } from 'react'


export const NewsProvider:FC = () =>{
  
  const { refetch } = useGetNews()
  useEffect(() => {
    refetch()
  }, [])

  return null
}
