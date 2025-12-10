import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import { BASE_URL } from "../../config/Api";

function ProjectListPage() {

    const [projects, setProjects] = useState(null)

    useEffect(() => {
        axios.get(BASE_URL + "/projects")
        .then((response) => {
            setProjects(response.data)
        })
        .catch((error) => {
            console.log("error", error)
        })
    }, [])

    if(projects === null) {
        return <Loader />
    }

    return (
        <div>
            <h1>Project List Page</h1>
            <h2>Number of Projects: {projects.length}</h2>

            {projects.map((elm) => {
                return (
                    <div className="card" key={elm.id}>
                        <h3>{elm.title}</h3>
                        <p>{elm.description}</p>
                    </div>
                )
            })}
        </div>
    );
}

export default ProjectListPage