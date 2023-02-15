import axios from 'axios';
import React from 'react';
import { env } from '../env';

interface SandwichProviderProps {
	children: React.ReactNode;
}

interface SandwichContextData {
	isLoading: boolean;
	getIngredients: () => Promise<void>;
}

const SandwichContext = React.createContext<SandwichContextData>({
	isLoading: false,
	getIngredients: async () => {},
});

export const SandwichProvider: React.FC<SandwichProviderProps> = ({
	children,
}) => {
	const [isLoading, setIsLoading] = React.useState(true);

	const getIngredients = async () => {
		try {
			const res = await axios.get(`${env.BASE_API_URL}/sandwiches`);
			console.log(res);
		} catch (error) {
			console.log(error);
		}
	};

	React.useEffect(() => {
		getIngredients();
	}, []);

	return (
		<SandwichContext.Provider value={{ isLoading, getIngredients }}>
			{children}
		</SandwichContext.Provider>
	);
};
