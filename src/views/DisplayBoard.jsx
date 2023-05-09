import React, { useState } from 'react'
import {
    Routes,
    Route,
    Link
} from "react-router-dom"
import SearchBar from '../components/SearchBar';
import People from '../components/People';
import HelloThere from '../components/HelloThere';
import Planets from '../components/Planets';

const DisplayBoard = () => {
    const [search, setSearch] = useState([])

    const searchHandle = (newSearch) => {
        setSearch(newSearch)
        console.log(search)
    }

    return (
        <div className='container text-center'>
            <SearchBar onNewSearch={searchHandle} />
            <Routes>
                <Route path='/'/>
                <Route path="/people/:id" element={<People />} />
                <Route path="/planets/:id" element={<Planets />} />
                <Route path="/HelloThere" element={<HelloThere />}/>
            </Routes>
        </div>
    )
}
export default DisplayBoard