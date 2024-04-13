
import baseApiService from "../../common/config/axios"
import { News } from "./dto"

export const Service = {
    getNews: (): Promise<News[]> => {
        return baseApiService.get('news')
    }
}