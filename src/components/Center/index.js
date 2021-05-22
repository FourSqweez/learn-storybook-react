import styled from 'styled-components'

const Center = ({ children }) => {
	return <CenterElement>{children}</CenterElement>
}

export default Center

const CenterElement = styled.div`
	display: flex;
	justify-content: center;
`
