import { useSandwich } from '@/components/SandwichProvider';
import { colors } from '@/theme/theme';
import {
	Box,
	Center,
	Flex,
	FormControl,
	FormLabel,
	Heading,
	Select,
	Spinner,
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
								<Select>
									<option>Testing</option>
									<option>Testing</option>
									<option>Testing</option>
								</Select>
							</FormControl>
							<FormControl>
								<FormLabel>Meats</FormLabel>
								<Select>
									<option>Testing</option>
									<option>Testing</option>
									<option>Testing</option>
								</Select>
							</FormControl>
							<FormControl>
								<FormLabel>Cheeses</FormLabel>
								<Select>
									<option>Testing</option>
									<option>Testing</option>
									<option>Testing</option>
								</Select>
							</FormControl>
							<FormControl>
								<FormLabel>Vegetables</FormLabel>
								<Select>
									<option>Testing</option>
									<option>Testing</option>
									<option>Testing</option>
								</Select>
							</FormControl>
							<FormControl>
								<FormLabel>Condiments</FormLabel>
								<Select>
									<option>Testing</option>
									<option>Testing</option>
									<option>Testing</option>
								</Select>
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
