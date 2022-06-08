import TodoProvider from "../../store/todosProvider"
import AddButton from "../UI/addButton"
import Box from "../UI/box"
import Input from "../UI/input"
import Section from "../UI/section"
import TextArea from "../UI/textArea"
import { useContext } from "react";
import TodosContext from "../../store/todosContext"
const GetInformation = () => {
    const todoCTX = useContext(TodosContext);

    const clickHandler = (event) => {
        event.preventDefault();

        if (todoCTX.title.trim() === '' || todoCTX.description.trim() === '' || todoCTX.dueDate.trim() === "") {
            todoCTX.showCartHandler();
        } else {
            todoCTX.addTodo(todoCTX.title, todoCTX.description, todoCTX.dueDate, todoCTX.id);
            todoCTX.setId(todoCTX.id + 1);
            todoCTX.resetDescription();
            todoCTX.resetDueDate();
            todoCTX.resetTitle();
        }
    }


    return ( < TodoProvider >
        <
        Box >
        <
        Section >
        <
        Input label = "Title"
        input = {
            { type: "text", id: "title", value: todoCTX.title, onChange: (event) => { todoCTX.setTitle(event) } }
        }
        /> <Input label = "Due Date"
        input = {
            { type: "date", id: "dueDate", value: todoCTX.dueDate, onChange: (event) => { todoCTX.setDueDate(event) } }
        }
        /> </Section > < TextArea label = "Description"
        textarea = {
            { id: 'description', value: todoCTX.description, onChange: (event) => { todoCTX.setDescription(event) } }
        }
        /> <AddButton onClick = { clickHandler } /
        > < /Box> </TodoProvider >
    )
}
export default GetInformation;