import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SearchBar = (props) => {
    const [type, setType] = useState("people")
    const [id, setId] = useState(1)

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();

        if(type === "people"){
            navigate(`/people/${id}`)
        } else if(type === "planets"){
            navigate(`/planets/${id}`)
        }
    }

    const handleTypeChange = (e) => {
        setType(e.target.value)
    }

    const handleIdChange = (e) => {
        setId(e.target.value)
    }



    return (
        <form onSubmit={handleSubmit} >
            <label>Search for</label>
            <select  value={type} onChange={handleTypeChange}>
                <option value="people">people</option>
                <option value="planets">planets</option>
            </select>

            <label>ID: </label>
            <input type="text"
                onChange={handleIdChange}
                value={id} />
            <button type='submit'>Search </button>
        </form>
    )
}

export default SearchBar