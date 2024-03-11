import { createContext, useContext } from "react";


interface LoginContextData {
    login: User.Login | null;
}

export const LoginContext = createContext<LoginContextData>({} as LoginContextData);

export const useLogin = () => useContext(LoginContext);
