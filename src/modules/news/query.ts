import { useQuery } from "react-query"
import { News } from "./dto"
import { Service } from "./service"
import { UseQuery } from "../../common/config/react-query"

export const useGetNews= ():UseQuery<News[]>  => {
    return useQuery(['NEWS'], () => Service.getNews())
}