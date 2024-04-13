import { create } from "zustand"
import { User } from "../dto"

interface State  {
    token?: string
    user: User | null
}

interface Store extends State {
    api: {
setToken: (token?:string) => void
setUser: (user: User | null) => void
}
}

export const useAuth = create<Store>((setState, getStage)=> ({
    user: null,
   api: {
    setUser: (user)=> setState(() => ({user})),
    setToken: (token?:string) => setState({token}) 
   } 
}))