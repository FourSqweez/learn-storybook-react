import Button from './Button'

export default {
	title: 'Form/Button',
	component: Button,
	args: {
		children: 'Button'
	}
}

export const Primary = () => <Button variant="primary">Primary</Button>
export const Secondary = () => <Button variant="secondary">Secondary</Button>
export const Success = () => <Button variant="success">Success</Button>
export const Danger = () => <Button variant="danger">Danger</Button>

const Template = (args) => <Button {...args} />

export const PrimaryArgs = Template.bind({})
PrimaryArgs.args = {
	variant: 'primary',
	// children: 'Primary Args',
}

export const LongPrimaryArgs = Template.bind({})
LongPrimaryArgs.args = {
	...PrimaryArgs.args,
	children: 'Long Primary Args',
}

export const SecondaryArgs = Template.bind({})
SecondaryArgs.args = {
	variant: 'secondary',
	children: 'Secondary Args',
}
