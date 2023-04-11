import React from "react";
import { useEffect } from "react";
import getMovies from "../api";

function Row({title,path}){
    const[movies, setMovies] = React.useState([])
    const fetchMovies = async (_path)=>{
        try{
            const data = await getMovies(_path);
            setMovies(data?.results)
            console.log(data)

    }catch(error){
        console.log('error row: ',error)
    }}

    useEffect(() =>{
        fetchMovies(path)
    },[path])

    return(
        <div className="row-container">
        <h2 className="row=header">{title}</h2>
        <div className="row-cards">
            {movies?.map((movies)=>{
                return<div key={movies.id}>{movies.original_title}</div>
            })}
        </div>
        </div>
    )
}

export default Row;