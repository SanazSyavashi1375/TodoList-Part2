import { Fragment } from "react";
import ReactDOM from "react-dom";
import '../../assets/css/error.css'
const BackDrop = (props) => {
    return <div className = "backdrop"
    onClick = { props.onClick } > < /div>
}
const ModalOverlay = props => {
    return ( < div className = "modal" >
        <
        div className = "content" > { props.children } < /div> </div >
    )
}
const ErrorModule = (props) => {
        const portal = document.getElementById('error')
        return ( < Fragment > {
                    ReactDOM.createPortal( < BackDrop onClick = { props.onClose }
                        /> , portal) } {
                        ReactDOM.createPortal( < ModalOverlay > { props.error } < /ModalOverlay>,portal)}

                            <
                            /Fragment> 
                        )
                    }
                    export default ErrorModule;