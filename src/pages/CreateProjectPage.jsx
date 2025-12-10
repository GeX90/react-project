import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../config/Api";

function CreateProjectPage() {

    const navigate = useNavigate()

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault()
        
        const newProject = {
            title: title,
            description: description
        }
        axios.post(BASE_URL + "/projects", newProject)
            .then((response) => {
                navigate("/projects")
            })
            .catch(e => console.log("Error creating a new project...", e))
    }
    return (
        <>
            <div className="CreateProjectPage">
                <h3>Add Project</h3>

                <form onSubmit={handleSubmit}>
                    <label>
                        Title:
                        <input
                            type="text"
                            name="title"
                            placeholder="Enter the title"
                            required
                            value={title}
                            onChange={(e) => { setTitle(e.target.value) }}
                        />
                    </label>

                    <label>
                        Description:
                        <input
                            type="text"
                            name="description"
                            placeholder="Enter the description"
                            required
                            value={description}
                            onChange={(e) => { setDescription(e.target.value) }}
                        />
                    </label>
                    <button>Create</button>
                </form>
            </div>
        </>
    )
}

export default CreateProjectPage