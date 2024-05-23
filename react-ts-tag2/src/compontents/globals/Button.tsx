import { ButtonType } from "../../types/globalTypes";


export default function Button({ action, id, name, style, children}:ButtonType) {

    return (
        <button style={style} 
        onClick={action}>
            {text}
            </button>
    )
}
