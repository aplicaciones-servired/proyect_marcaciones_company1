import { createContext, useState } from "react";

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthContext = createContext({
  isAuthenticated: false
});

export function AuthProvider({ children }: AuthProviderProps) {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  console.log(setIsAuthenticated)


  return (
    <AuthContext.Provider value={{ isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  )
}