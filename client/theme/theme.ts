import { extendTheme, StyleFunctionProps, ThemeConfig } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const config: ThemeConfig = {
	initialColorMode: 'light',
};

export const colors = {
	purple: '#572AF8',
	orange: '#FC7300',
	darkOrange: '#7a4300',
	white: '#FFFFFF',
	greyPurple: '#3d405b',
	darkPurple: '#301934',
	whitish: '#f7ede2',
	black: '#000000',
};

export const theme = extendTheme({
	config,
	colors,
	components: {
		Button: {
			variants: {
				cta: {
					bg: colors.orange,
					color: colors.white,
					_hover: {
						bg: colors.darkOrange,
						color: colors.white,
					},
				},
				solid: {
					bg: colors.purple,
					color: colors.white,
					_hover: {
						bg: colors.darkPurple,
						color: colors.white,
					},
				},
				outline: {
					borderWidth: 2,
					borderColor: colors.darkPurple,
					color: colors.darkPurple,
				},
			},
		},
	},
	styles: {
		global: (props: StyleFunctionProps) => ({
			body: {
				color: mode(colors.white, colors.black)(props),
				backgroundColor: mode(colors.white, colors.greyPurple)(props),
			},
			// '::-webkit-scrollbar': { display: 'none' },
			'#hubspot-messages-iframe-container': {
				colorScheme: 'auto',
			},
		}),
	},
});
