import ErrorModule from "../UI/errorModule";
import { useContext } from "react";
import TodoProvider from "../../store/todosProvider";
import TodosContext from "../../store/todosContext";
const ErrorOfFill = () => {
    const todoCTX = useContext(TodosContext);

    return ( < TodoProvider > {
        todoCTX.cartIsShown && < ErrorModule onClose = { todoCTX.hideCartHandler }
        error = 'Please Fill All The Required Fields!' / >
    } < /TodoProvider>)
}
export default ErrorOfFill;