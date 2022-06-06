import '../../assets/css/input.css'
import Label from './label'

const Input = props => {
    return ( < div className = "input" >
        <
        Label id = { props.input.id }
        label = { props.label }
        /> <
        input {...props.input }
        required / >
        <
        /div>
    )
}
export default Input;