
import baseApiService from '../../common/config/axios'

import type { News } from './dto'

export const Service = { getNews: (): Promise<News[]> => baseApiService.get('news') }
