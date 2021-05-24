import Center from './../src/components/Center'
import { createMuiTheme, ThemeProvider } from '@material-ui/core'
import { green } from '@material-ui/core/colors'
import { withConsole } from '@storybook/addon-console'
import { addDecorator, addParameters } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

const theme = createMuiTheme({
	palette: {
		primary: {
			main: green[500],
		},
	},
})

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	options: {
		storySort: (a, b) =>
			a[1].kind === b[1].kind
				? 0
				: a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
	},
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
}

export const decorators = [
	(Story) => (
		<ThemeProvider theme={theme}>
			<Center>
				<Story />
			</Center>
		</ThemeProvider>
	),
]

addDecorator((storyFn, context) => withConsole()(storyFn)(context))
addDecorator(withKnobs)
addParameters({
	viewport: {
		viewports: INITIAL_VIEWPORTS,
	},
})
