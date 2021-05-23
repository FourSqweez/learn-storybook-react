import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
	success: {
		backgroundColor: 'green',
		color: 'white',
		'&:hover': {
			backgroundColor: 'yellow',
		},
	},
})

export default {
	title: 'MaterialUI/Button',
	component: Button,
}

export const Success = () => {
	const classes = useStyles()
	return (
		<Button variant="contained" color="primary">
			Success
		</Button>
	)
}

export const Danger = () => (
	<Button variant="contained" color="secondary">
		Primary
	</Button>
)
