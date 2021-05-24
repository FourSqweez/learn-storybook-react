import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core'
import { action, actions } from '@storybook/addon-actions'
import { select, text, boolean } from '@storybook/addon-knobs'

const useStyles = makeStyles({
	success: {
		backgroundColor: 'green',
		color: 'white',
		'&:hover': {
			backgroundColor: 'yellow',
		},
	},
	fail: {
		backgroundColor: 'red',
		color: 'white',
		'&:hover': {
			backgroundColor: 'blue',
		},
	},
})

export default {
	title: 'MaterialUI/Button',
	component: Button,
	argTypes: {
		onClick: {},
	},
}

const Template = (args) => <Button {...args} />

export const Success = Template.bind({})
Success.args = {
	variant: 'contained',
	color: 'primary',
	children: 'Success',
}

export const Danger = () => (
	<Button
		variant="contained"
		color="secondary"
		{...actions('onClick', 'onMouseOver')}
	>
		Primary
	</Button>
)

export const Log = () => (
	<Button
		color="inherit"
		variant="contained"
		onClick={() => console.log('Button Clicked', process.env.STORYBOOK_THEME)}
	>
		Log
	</Button>
)

export const Knobs = () => {
	const classes = useStyles()
	const label = 'ClassName'
	const options = {
		Success: classes.success,
		Fail: classes.fail,
	}
	const defaultValue = classes.success

	return (
		<Button
			className={select(label, options, defaultValue)}
			variant="contained"
			disabled={boolean('Disabled', false)}
		>
			{text('Label', 'Button Label')}
		</Button>
	)
}
