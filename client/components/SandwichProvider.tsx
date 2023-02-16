import axios from 'axios';
import React from 'react';
import { env } from '../env';

interface SandwichProviderProps {
	children: React.ReactNode;
}

type IngredientCategory =
	| 'breads'
	| 'cheeses'
	| 'condiments'
	| 'meats'
	| 'vegetables';
interface Ingredient {
	category: string;
	id: number;
	name: string;
	price: number;
}

interface IngredientGroup {
	category: IngredientCategory;
	options: Ingredient[];
}

type IngredientsByCategory = {
	[key in IngredientCategory]: IngredientGroup;
};

interface SandwichContextData {
	isLoading: boolean;
	getIngredients: () => Promise<void>;
	ingredients: IngredientsByCategory | null;
}

const SandwichContext = React.createContext<SandwichContextData>({
	isLoading: false,
	getIngredients: async () => {},
	ingredients: null,
});

export const SandwichProvider: React.FC<SandwichProviderProps> = ({
	children,
}) => {
	const [isLoading, setIsLoading] = React.useState(true);
	const [ingredients, setIngredients] =
		React.useState<IngredientsByCategory | null>(null);

	const getIngredients = async () => {
		try {
			const res = await axios.get(`${env.BASE_API_URL}/ingredients`);
			const { data } = res;
			setIngredients(data);
		} catch (error) {
			console.log(error);
		}
	};

	React.useEffect(() => {
		getIngredients();
	}, []);

	return (
		<SandwichContext.Provider
			value={{ isLoading, getIngredients, ingredients }}
		>
			{children}
		</SandwichContext.Provider>
	);
};

export const useSandwich = () => React.useContext(SandwichContext);
