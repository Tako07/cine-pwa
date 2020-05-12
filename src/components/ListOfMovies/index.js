import React, { useState, useEffect } from 'react'
import firebase from 'firebase/app'
import HashLoader from 'react-spinners/HashLoader'
import { MovieCard } from '../MovieCard'

const useMoviesData = (categoryName) => {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)
    let query = categoryName
        ? firebase.firestore().collection('movies').where('categories', 'array-contains', categoryName)
        : firebase.firestore().collection('movies')

    useEffect(_ => {
        setLoading(true)
        query.get()
        .then( result => {
            let responseMovies = []
            result.forEach(movie => {
                responseMovies.push({
                    id: movie.id,
                    name: movie.data().name,
                    src: movie.data().cover,
                    categories: movie.data().categories,
                    schedules: movie.data().schedules
                })
            })
            setMovies(responseMovies)
            setLoading(false)
        })
    }, [categoryName] )
    return [movies, loading]
}

export const ListOfMovies = ({categoryName}) => {
    const [movies, loading] = useMoviesData(categoryName?? categoryName)
    
    if(loading){
        <HashLoader size={150}
        color={"#123abc"} css={`display: block;
        margin: 0 auto;
        border-color: red;
        `}/>
    }
    return (
        <ul>
            {movies.map( movie => <MovieCard {...movie} key={movie.id} /> )}
        </ul>
    )
}