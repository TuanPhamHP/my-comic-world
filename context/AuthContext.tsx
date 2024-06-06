import { createContext, useContext, useState, useEffect, PropsWithChildren } from 'react';
import { useRouter } from 'next/router';

type User = {
	// Định nghĩa kiểu User
	// nên define & export tại ~/models
};

type AuthContextType = {
	user: User | null;
	loading: boolean;
	login: (userData: User) => void;
	logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface Props {}
export const AuthProvider: React.FC<PropsWithChildren<Props>> = ({ children }) => {
	const [user, setUser] = useState<User | null>(null);
	const [loading, setLoading] = useState<boolean>(true);
	const router = useRouter();

	useEffect(() => {
		// Logic checkuser
		const checkAuth = async () => {
			const user = localStorage.getItem('user');
			if (user) {
				setUser(JSON.parse(user));
			}
			setLoading(false);
		};

		checkAuth();
	}, []);

	const login = async (userData: User) => {
		// Mocked login logic
		localStorage.setItem('user', JSON.stringify(userData));
		setUser(userData);
		router.push('/');
	};

	const logout = () => {
		// Mocked logout logic
		localStorage.removeItem('user');
		setUser(null);
		router.push('/login');
	};

	return <AuthContext.Provider value={{ user, loading, login, logout }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
	const context = useContext(AuthContext);
	if (!context) {
		throw new Error('useAuth must be used within an AuthProvider');
	}
	return context;
};
