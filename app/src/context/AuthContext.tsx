import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import axios from 'axios';

interface AuthContextType {
    user: any;
    token: string | null;
    loading: boolean;
    login: (email: string, password: string) => Promise<any>;
    register: (name: string, email: string, password: string) => Promise<any>;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);


interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     if (token) {
    //         axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    //         fetchUser();
    //     } else {
    //         setLoading(false);
    //     }
    // }, [token]);

    // const fetchUser = async () => {
    //     try {
    //         const response = await axios.get(`${API}/auth/me`);
    //         setUser(response.data);
    //     } catch (error) {
    //         logout();
    //     } finally {
    //         setLoading(false);
    //     }
    // };

    // const login = async (email: string, password: string) => {
    //     const response = await axios.post(`${API}/auth/login`, { email, password });
    //     const { token: newToken, user: userData } = response.data;
    //     localStorage.setItem('token', newToken);
    //     axios.defaults.headers.common['Authorization'] = `Bearer ${newToken}`;
    //     setToken(newToken);
    //     setUser(userData);
    //     return userData;
    // };

    // const register = async (name: string, email: string, password: string) => {
    //     const response = await axios.post(`${API}/auth/register`, { name, email, password });
    //     const { token: newToken, user: userData } = response.data;
    //     localStorage.setItem('token', newToken);
    //     axios.defaults.headers.common['Authorization'] = `Bearer ${newToken}`;
    //     setToken(newToken);
    //     setUser(userData);
    //     return userData;
    // };

    // const logout = () => {
    //     localStorage.removeItem('token');
    //     delete axios.defaults.headers.common['Authorization'];
    //     setToken(null);
    //     setUser(null);
    // };

    // return (
    //     <AuthContext.Provider value={{ user, token, loading, login, register, logout }}>
    //         {children}
    //     </AuthContext.Provider>
    // );
};

// export const useAuth = (): AuthContextType => {
//     const context = useContext(AuthContext);
//     if (!context) {
//         throw new Error('useAuth must be used within an AuthProvider');
//     }
//     return context;
// };
