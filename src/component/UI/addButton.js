import '../../assets/css/addButton.css'
const AddButton = (props) => {
    return ( <
        div className = "addButton" >
        <
        button onClick = { props.onClick } > Add < /button> <
        /div>
    )
}
export default AddButton;