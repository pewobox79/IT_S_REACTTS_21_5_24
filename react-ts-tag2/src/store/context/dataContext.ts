import { createContext } from "react";

export const DataContext = createContext<{user:{name: string, fired: boolean}; setUser: React.Dispatch<React.SetStateAction<{name: string, fired: boolean}>>;}>({user:{name:"", fired: false},setUser:()=>{}})