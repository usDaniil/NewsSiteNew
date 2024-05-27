import type { News } from './dto'

export const newsFilter = (news: News[], searchLine: string) => searchLine === '' ? news : news.filter((value) => value.header.toLowerCase().includes(searchLine.toLowerCase())) 
