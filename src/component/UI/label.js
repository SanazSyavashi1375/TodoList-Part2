import '../../assets/css/label.css'

const Label = (props) => {
    return ( < label className = "label"
        htmlFor = { props.id } > { props.label } < /label>
    )
}
export default Label;