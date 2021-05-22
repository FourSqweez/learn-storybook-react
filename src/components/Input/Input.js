import styled from 'styled-components'

const Input = (props) => {
	const { size = 'medium', ...rest } = props
	return <InputElement size={size} {...rest}></InputElement>
}

export default Input

const handleInputSize = (size) => {
	switch (size) {
		case 'small':
			return 'height: 2rem; font-size: 0.875rem;'
		case 'medium':
			return 'height: 2.5rem; font-size: 1rem;'
		case 'large':
			return 'height: 3rem; font-size: 1.25rem;'
		default:
			return 'height: 2.5rem; font-size: 1rem;'
	}
}

const InputElement = styled.input`
	display: block;
	width: 400px;
	padding-left: 1rem;
	padding-right: 1rem;
	border-radius: 0.25rem;
	border: 1px solid;
	border-color: inherit;
	background-color: #fff;
	${({ size }) => handleInputSize(size)};
`
