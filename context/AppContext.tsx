import { Dispatch, ReactNode, createContext, useReducer } from "react"

type Props = {
  children: ReactNode
}

type State = {
  daily: boolean
  weekly: boolean
  monthly: boolean
}

type ReducerAction = {
  type: string
  payload?: string
}

type Context = {
  state: State
  dispatch: Dispatch<ReducerAction>
}

// ==== Reducer Logic ==== //
const initState = {
  daily: true,
  weekly: false,
  monthly: false,
}

const timeReducer = (state: State, action: ReducerAction) => {
  switch (action.type) {
    case "daily":
      return {
        ...state,
        daily: true,
        weekly: false,
        monthly: false,
      }
    case "weekly":
      return {
        ...state,
        daily: false,
        weekly: true,
        monthly: false,
      }
    case "monthly":
      return {
        ...state,
        daily: false,
        weekly: false,
        monthly: true,
      }

    default:
      return state
  }
}

// ==== Context ==== //
// @Note: {} as Context!
const AppContext = createContext<Context>({} as Context)
export const AppProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(timeReducer, initState)

  return (
    <AppContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppContext
