import { useSandwich } from '@/components/SandwichProvider';
import { colors } from '@/theme/theme';
import {
	Box,
	Center,
	Checkbox,
	Flex,
	FormControl,
	FormLabel,
	Heading,
	Select,
	Spinner,
	Wrap,
	Text,
	useBreakpointValue,
} from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import React from 'react';

interface orderProps {}

export const Order: React.FC<orderProps> = ({}) => {
	const { ingredients } = useSandwich();
	const isMobile = useBreakpointValue({ base: true, sm: true, md: false });

	return (
		<Flex
			justifyContent={'space-evenly'}
			direction={['column', 'column', 'row']}
			color={colors.black}
			gap={10}
			p={10}
		>
			<Box maxW={'500px'} p={5} bgColor={colors.whitish} width={'100%'}>
				<Heading>Build your sandwich</Heading>
				<Box border={`2px solid ${colors.black}`} />

				<Formik
					validateOnChange={false}
					validateOnBlur={false}
					initialValues={{
						selectedIngredients: [],
					}}
					// validationSchema={}
					onSubmit={async ({}) => {}}
				>
					{ingredients ? (
						<Form>
							<FormControl>
								<FormLabel>Bread</FormLabel>
								<Wrap>
									{ingredients.breads.options.map((bread) => (
										<Checkbox key={bread.id}>
											{bread.name} $
											{(bread.price / 100).toFixed(2)}
										</Checkbox>
									))}
								</Wrap>
							</FormControl>

							<FormControl>
								<FormLabel>Meats</FormLabel>
								<Wrap>
									{ingredients.meats.options.map((meat) => (
										<Checkbox key={meat.id}>
											{meat.name} $
											{(meat.price / 100).toFixed(2)}
										</Checkbox>
									))}
								</Wrap>
							</FormControl>

							<FormControl>
								<FormLabel>Cheeses</FormLabel>
								<Wrap>
									{ingredients.cheeses.options.map(
										(cheese) => (
											<Checkbox key={cheese.id}>
												{cheese.name} $
												{(cheese.price / 100).toFixed(
													2
												)}
											</Checkbox>
										)
									)}
								</Wrap>
							</FormControl>

							<FormControl>
								<FormLabel>Vegetables</FormLabel>
								<Wrap>
									{ingredients.vegetables.options.map(
										(veg) => (
											<Checkbox key={veg.id}>
												{veg.name} $
												{(veg.price / 100).toFixed(2)}
											</Checkbox>
										)
									)}
								</Wrap>
							</FormControl>

							<FormControl>
								<FormLabel>Condiments</FormLabel>
								<Wrap>
									{ingredients.condiments.options.map(
										(condiment) => (
											<Checkbox key={condiment.id}>
												{condiment.name} $
												{(
													condiment.price / 100
												).toFixed(2)}
											</Checkbox>
										)
									)}
								</Wrap>
							</FormControl>
						</Form>
					) : (
						<Center mt={40}>
							<Spinner size={'xl'} />
						</Center>
					)}
				</Formik>
			</Box>
			<Box
				maxW={'500px'}
				p={5}
				w="40%"
				minH="30vh"
				h="full"
				bgColor={colors.whitish}
				width={'100%'}
			>
				<Heading>Order</Heading>
				<Box border={`2px solid ${colors.black}`} />
			</Box>
		</Flex>
	);
};

export default Order;
