import { useState } from "react"

const AddArticleForm = () => {

    const INIT_VALUE = { title: "", body: "" };

    const [open, setOpen] = useState(false);
    const [newArticle, setNewArticle] = useState(INIT_VALUE);
    const [responseData, setResponseData] = useState<{ id: string, userId: string, title: string, body: string }>()

    const [isSending, setIsSending] = useState(false)

    function handleFormOpen() {
        setOpen(!open) //toggle 
    }

    function handleChange(event: { target: { name: string, value: string } }) {
        setNewArticle({ ...newArticle, [event.target.name]: event.target.value })
    }

    function handleSubmit(event: { preventDefault: () => void }) {
        event.preventDefault()
        setIsSending(true)
        const config = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify({ ...newArticle, userId: 1 })
        }

        fetch("https://jsonplaceholder.typicode.com/posts", config)
            .then(res => res.json())
            .then(data => {
                setResponseData(data)
                setIsSending(false)
            })

    }

    return (
        <div>
            <button onClick={handleFormOpen}>{open ? "Close" : "Add new article"}</button>

            {open && <div>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="title">Article title</label><br />
                    <input name="title" type="text" id="title" onChange={handleChange} /><br />
                    <label htmlFor="body">Article Body</label><br />
                    <input name="body" type="text" id="body" onChange={handleChange} /><br />
                    <button type="submit">{isSending? "is sending...":"submit article"}</button>
                </form>
            </div>}

            {responseData && <div>
                <p style={{color: "green", fontWeight: "bold"}}>your article has been successfully sent!</p>
                <p>Title: {responseData.title}</p>
                <p>Body: {responseData.body}</p>
                <p>User: {responseData.userId}</p>
                <p>Article Id: {responseData.id}</p>
            </div>}
        </div>
    )
}

export default AddArticleForm
