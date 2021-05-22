import React from 'react'

import Button from './Button'
import { action } from '@storybook/addon-actions'

export const Text = () => (
	<Button onClick={action('clicked')}>Just a Button</Button>
)

export const Emoji = () => (
	<Button onClick={action('clicked')}>
		<span role="img" aria-label="so cool">
			😊😂😎✔
		</span>
	</Button>
)

export default {
	title: 'Components/Button',
	component: Button,
}
