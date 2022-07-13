import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { database } from "../database";
import { User } from "../database/models/User";
import { UserDTO } from "../dtos/UserDTO";
import { api } from "../services/api";

interface UserState extends UserDTO {
  user_id: string;
}

interface SignInResponseData {
  token: string;
  user: UserDTO;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: UserState | null;
  isAuthenticated: boolean;
  signIn: (credentials: SignInCredentials) => Promise<void>;
  signOut: () => Promise<void>;
  updateUser: (user: UserState) => Promise<void>;
}

const AuthContext = createContext({} as AuthContextData);

export const useAuthContext = () => useContext(AuthContext);

interface AuthContextProviderProps {
  children: React.ReactNode;
}

export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({
  children,
}) => {
  const [user, setUser] = useState<AuthContextData["user"]>(null);

  useEffect(() => {
    const userCollection = database.get<User>("users");

    userCollection
      .query()
      .fetch()
      .then(users => {
        if (users.length) {
          const user = users[0]._raw as unknown as User;
          (api.defaults.headers as any).Authorization = `Bearer ${user.token}`;

          setUser({
            id: user.id,
            user_id: user.user_id,
            name: user.name,
            email: user.email,
            driver_license: user.driver_license,
            avatar: user.avatar,
          });
        }
      })
      .catch(console.warn);
  }, []);

  const signIn: AuthContextData["signIn"] = useCallback(async credentials => {
    const {
      data: { token, user },
    } = await api.post<SignInResponseData>("/sessions", credentials);

    const user_id = user.id;

    const userCollection = database.get<User>("users");

    await database.write(async () => {
      await userCollection.create(newUser => {
        user.id = newUser.id;

        newUser.user_id = user.id;
        newUser.name = user.name;
        newUser.email = user.email;
        newUser.driver_license = user.driver_license;
        newUser.avatar = user.avatar;
        newUser.token = token;
      });
    });

    (api.defaults.headers as any).Authorization = `Bearer ${token}`;
    setUser({
      ...user,
      user_id,
    });
  }, []);

  const signOut: AuthContextData["signOut"] = useCallback(async () => {
    const userCollection = database.get<User>("users");

    await database.write(async () => {
      const userToDestroy = await userCollection.find(user!.id);
      await userToDestroy.destroyPermanently();
    });

    (api.defaults.headers as any).Authorization = "";
    setUser(null);
  }, []);

  const updateUser: AuthContextData["updateUser"] = useCallback(async user => {
    const userCollection = database.get<User>("users");

    await database.write(async () => {
      const userToUpdate = await userCollection.find(user!.id);

      await userToUpdate.update(userData => {
        userData.name = user.name;
        userData.driver_license = user.driver_license;
        userData.avatar = user.avatar;
      });
    });

    setUser(user);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        signIn,
        signOut,
        updateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
