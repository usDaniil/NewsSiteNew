import { create } from "zustand"

interface State  {
    token?: string
}

interface Store extends State {
    api: {
setToken: (token?:string) => void
}
}

export const useAuth = create<Store>((setState, getStage)=> ({
   api: {
    setToken: (token) => setState({token}) 
   } 
}))