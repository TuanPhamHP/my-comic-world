// ~/hoc/withAuth.tsx
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../context/AuthContext';

const withAuth = <P extends {}>(WrappedComponent: React.ComponentType<P>) => {
	const WithAuthComponent: React.FC<P> = props => {
		const router = useRouter();
		const { user, loading } = useAuth();

		useEffect(() => {
			if (!loading && !user) {
				router.push('/login');
			}
		}, [loading, user, router]);

		if (loading || !user) {
			return <p>Loading...</p>;
		}

		return <WrappedComponent {...props} />;
	};

	return WithAuthComponent;
};

export default withAuth;
