import { create } from 'zustand'

import type { News } from './dto'

interface State {
  isLoading: boolean;
  news?: News[];
  searchLine?: string;
}

interface Store extends State {
  api: {
    setNews: (news?: News[]) => void;
    setIsLoading: (isLoading: boolean) => void;
    setSearchLine: (searchLine: string) => void;

  };
}

export const useNewsStore = create<Store>((setState) => ({
  isLoading: false, 
  searchLine: '',
  api: { 
    setNews: (news) => setState({ news, isLoading: false }), 
    setIsLoading: (isLoading) => setState({ isLoading }),
    setSearchLine: (searchLine) => setState({ searchLine })
  } 
}))
