import '../../assets/css/row.css'
import TodosContext from '../../store/todosContext';
import { useContext } from 'react';
const Row = (props) => {
        const todoCTX = useContext(TodosContext);
        return ( <
            div className = "rowOfTable" >
            <
            span className = 'number' > { props.number } < /span> <
            span className = 'simpleCel' > { props.title } < /span>  <
            span className = 'description' > { props.description } < /span>  <
            span className = 'simpleCel' > { props.dueDate } < /span>  <
            span className = 'simpleCel' > {
                (props.deleteBtn === 'True') ? < button className = 'deleteBtn'
                onClick = { props.onClick } > Delete < /button> :"" } </span > < /div>
            )
        }
        export default Row;