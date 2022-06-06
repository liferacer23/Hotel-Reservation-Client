import { createContext, useEffect, useReducer } from "react";

const INITIAL_STATE = {
  user: typeof window !== 'undefined'? JSON.parse(localStorage.getItem("user")) : null || null,
  loading: false,
  error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        loading: true,
        error: false,
      };
    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        loading: false,
        error: false,
      };
    case "LOGIN_FAILD":
      return {
        user: null,
        loading: false,
        error: action.payload,
      };
    case "LOG_OUT":
      return {
        user: null,
        loading: false,
        error: null,
      };
    default:
     return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        loading: state.loading, 
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
