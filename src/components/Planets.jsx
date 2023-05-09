import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const Planets = () => {
    const { id } = useParams();
    const [planet, setPlanet] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${id}`)
            .then((response) => {
                setPlanet(response.data)
            })
            .catch((err) => {
                navigate("/HelloThere")
                console.log("Them Errors: ", err)
            }
            )
    }, [id]);


    return (
        <div>
            <h1 className='mb-5 mt-3'>{planet.name}</h1>
            <p><span style={{fontWeight: "bold"}}>Climate: </span>{planet.climate}</p>
            <p><span style={{fontWeight: "bold"}}>Terrain: </span>{planet.terrain} kg</p>
            <p><span style={{fontWeight: "bold"}}>Surface Water: </span>{planet.surface_water}</p>
            <p><span style={{fontWeight: "bold"}}>Population: </span>{planet.population}</p>
        </div>
    )
}

export default Planets