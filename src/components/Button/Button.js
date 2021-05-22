import styled from 'styled-components'

const Button = (props) => {
	const { variant = 'primary', children, ...rest } = props
	return (
		<ButtonElement color={variant} {...rest}>
			{children}
		</ButtonElement>
	)
}

export default Button

const handleBgColorType = (color) => {
	switch (color) {
		case 'primary':
			return '#008cba'
		case 'secondary':
			return '#e7e7e7'
		case 'success':
			return '#4caf50'
		case 'danger':
			return '#f56342'
		default:
			return '#008cba'
	}
}

const ButtonElement = styled.button`
	border: none;
	color: white;
	padding: 15px 32px;
	text-align: center;
	text-decoration: none;
	display: inline-block;
	font-size: 16px;
	border-radius: 4px;
	cursor: pointer;
	background-color: ${({ color }) => handleBgColorType(color)};
`
