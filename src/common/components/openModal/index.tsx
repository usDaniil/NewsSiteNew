import { ComponentType, Suspense } from 'react'
import { create } from 'zustand'

type OpenModalAction = <T>(component:ComponentType<T & { onClose: () => void }>, props: T) => void

interface Store {
    Component: JSX.Element | null
    isOpen: boolean
    api: {
        open: OpenModalAction
        close: () => void
    }
}

export const useOpenModalStore = create<Store>((set) => ({
  Component: null,
  isOpen: false,
  api:{
    open: (Component, props) => set(({ api, isOpen }) => ({
      isOpen: true,
      Component: (
        <Suspense fallback={null}>
          <Component {...props} onClose={api.close} open={isOpen} /></Suspense>
      )
    })),
    close: () => set({ Component: null, isOpen: false })
  }
}))

export const OpenModal:React.FC = () => useOpenModalStore((state) => state.Component)

export const openModal:OpenModalAction = useOpenModalStore.getState().api.open

export const useIsModalOpen = (): boolean => useOpenModalStore((state) => Boolean(state.Component))
