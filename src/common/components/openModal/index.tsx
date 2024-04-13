import { ComponentType, Suspense } from "react";
import { create } from "zustand";

type OpenModalAction = <T>(component:ComponentType<T & { onClose: () => void }>, props: T) => void

interface Store {
    Component: JSX.Element | null
    api: {
        open: OpenModalAction
        close: () => void
    }
}

export const useOpenModalStore = create<Store>((set) => ({
    Component: null,
    api:{
        open: (Component, props) => set(({ api }) => ({
            Component: (
                <Suspense fallback={null}>
                    <Component {...props} onClose={api.close} /></Suspense>
            )
        })),
    close: () => set({ Component: null }),
    }
}))

export const OpenModal:React.FC = () => useOpenModalStore((state) => state.Component)

export const openModal:OpenModalAction = useOpenModalStore.getState().api.open

export const useIsModalOpen = (): boolean => useOpenModalStore((state) => Boolean(state.Component))