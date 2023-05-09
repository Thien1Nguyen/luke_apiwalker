import React, {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const People = () => {
    const { id } = useParams();
    const [person, setPerson] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}`)
        .then((response) => {
            setPerson(response.data)
        })
        .catch((err) => {
            navigate("/HelloThere")
            console.log("Them Errors: ", err)
        })
    }, [id]);

    return (
        <div>
            <h1 className='mb-5 mt-3'>{person.name}</h1>
            <p><span style={{fontWeight: "bold"}} >Height: </span>{person.height} cm</p>
            <p><span style={{fontWeight: "bold"}}>Mass: </span>{person.mass} kg</p>
            <p><span style={{fontWeight: "bold"}}>Hair Color: </span>{person.hair_color}</p>
            <p><span style={{fontWeight: "bold"}}>Skin Color: </span>{person.skin_color}</p>
        </div>
    )
}

export default People