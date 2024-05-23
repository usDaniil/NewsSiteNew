import { create } from 'zustand'

import type { News } from './dto'

interface State  {
    news?: News[]
}

interface Store extends State {
    api: {
setNews: (news?:News[]) => void
}
}

export const newsStore = create<Store>((setState)=> ({ api: { setNews: (news) => setState({ news }) } }))
