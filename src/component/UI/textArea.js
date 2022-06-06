import Label from "./label"
import '../../assets/css/textArea.css'
const TextArea=props=>{
    return ( <div className = "textArea" >
    <Label id={props.textarea.id} label={props.label}/>
    <textarea {...props.textarea }  /> 
    </div>
)
}
export default TextArea;