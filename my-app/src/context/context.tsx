import { createContext, useContext } from "react"
import language from "./language"
import { Context } from "./type"


export const GlobalContext = createContext<Context>({language})
export const useGlobalContext = () => useContext(GlobalContext)