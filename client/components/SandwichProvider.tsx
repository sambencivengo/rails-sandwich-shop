import axios from 'axios';
import React from 'react';
import { env } from '../env';

interface SandwichProviderProps {
	children: React.ReactNode;
}

interface IngredientsWithCategoryAndOptions {
	breads: {
		category: 'breads';
		options: Ingredient[];
	};
	meats: {
		category: 'cheeses';
		options: Ingredient[];
	};
	vegetables: {
		category: 'vegetables';
		options: Ingredient[];
	};
	condiments: {
		category: 'condiments';
		options: Ingredient[];
	};
	cheeses: {
		category: 'cheeses';
		options: Ingredient[];
	};
}

interface Ingredient {
	category: string;
	id: number;
	name: string;
	price: number;
}

interface SandwichContextData {
	isLoading: boolean;
	getIngredients: () => Promise<void>;
	ingredients: IngredientsWithCategoryAndOptions | null;
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
		React.useState<IngredientsWithCategoryAndOptions | null>(null);

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
