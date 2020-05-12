import React from 'react'
import { ListOfCategories } from '../components/LisOfCategories'
import { ListOfMovies } from '../components/ListOfMovies'

export const Home = ({ name }) => {
    return (
        <>
            <ListOfCategories />
            <ListOfMovies categoryName={name} />
        </>
    )
}