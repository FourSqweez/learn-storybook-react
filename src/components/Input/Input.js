import './Input.css'

const Input = (props) => {
   const {size = 'medium', ...rest} = props
   return (
      <input className={`input ${size}`} {...rest}>
         
      </input>
   )
}

export default Input
