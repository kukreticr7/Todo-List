import { createContext, useReducer, Dispatch, ReactNode } from "react";

interface Task {
  id: number;
  title: string;
  desc: string;
}

interface GlobalState {
  tasks: Task[];
}

interface Action {
  type: string;
  payload?: any; 
}

export const GlobalStateContext = createContext<GlobalState | undefined>(undefined);
export const GlobalDispatchContext = createContext<Dispatch<Action> | undefined>(undefined);

function reducer(state: GlobalState, action: Action): GlobalState {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case "REMOVE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case "EDIT_TASK":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? { ...task, ...action.payload.changes } : task
        ),
      };
    default:
      throw new Error("Bad Action Type");
  }
}

interface GlobalContextProviderProps {
  children: ReactNode;
}

const GlobalContextProvider = ({ children }: GlobalContextProviderProps) => {
  const [state, dispatch] = useReducer(reducer, { tasks: [] });

  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  );
};

export default GlobalContextProvider;
