import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { UserDTO } from "../dtos/UserDTO";
import { api } from "../services/api";

interface SignInResponseData {
  token: string;
  user: UserDTO;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: UserDTO | null;
  isAuthenticated: boolean;
  signIn: (credentials: SignInCredentials) => Promise<void>;
}

const AuthContext = createContext({} as AuthContextData);

export const useAuthContext = () => useContext(AuthContext);

interface AuthContextProviderProps {
  children: React.ReactNode;
}

export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({
  children,
}) => {
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<UserDTO | null>(null);

  useEffect(() => {
    (api.defaults.headers as any).Authorization = `Bearer ${token}`;
  }, [token]);

  const signIn: AuthContextData["signIn"] = useCallback(async credentials => {
    const { data } = await api.post<SignInResponseData>(
      "/sessions",
      credentials,
    );

    setToken(data.token);
    setUser(data.user);
  }, []);

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};
