import { DeepPartial, extendTheme, Theme, ThemeConfig } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const config: ThemeConfig = {
	initialColorMode: 'dark',
	useSystemColorMode: true,
};

const colors = {
	purple: '#572AF8',
	orange: '#FC7300',
	white: '#FFFFFF',
	darkPurple: '#3d405b',
	whitish: '#f7ede2',
	black: '#000000',
};

export const theme = extendTheme({
	config,
	colors,
	styles: {
		global: (props) => ({
			body: {
				color: mode(colors.white, colors.black)(props),
				backgroundColor: mode(colors.whitish, colors.darkPurple)(props),
			},
			// '::-webkit-scrollbar': { display: 'none' },
			'#hubspot-messages-iframe-container': {
				colorScheme: 'auto',
			},
		}),
	},
} as DeepPartial<Theme>);
