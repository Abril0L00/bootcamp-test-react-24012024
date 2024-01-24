import { useState } from "react";


export const PostCreate = () => {
    const [showForm,setShowForm] = useState(false);

    const handleChangeShowForm = (value) => {
        console.log(value)
        setShowForm(value);
    }
    return (
        <>
        {
            showForm == true ? 
            (
                <>
                <h1>Create Post</h1>
                <form>
                    Form
                    <button onClick={() => handleChangeShowForm(false)}>Close</button>
                </form>
                </>
            )
            : (
                <button onClick={() => handleChangeShowForm(true)}>Create Post</button>
            )
        }
        </>
    );
}