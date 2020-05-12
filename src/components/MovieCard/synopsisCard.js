import React, { useState, useEffect } from 'react'
import { Link } from '@reach/router'
import firebase from 'firebase/app'
import HashLoader from 'react-spinners/HashLoader'
import { ImgWrapperSynopsis, Img, List, Item, SchedulesText, SynopsisP } from './styles'

function useMovieData(id) {
    const [info, setInfo] = useState({})
    const [loading, setLoading] = useState(true)
    const db = firebase.firestore()

    useEffect( _ => {
        setLoading(true)
        db.collection('movies').doc(id).get()
        .then( response => {
            setInfo(response.data())
            setLoading(false)
            
        })
    }, [])
    return [info, loading]
}

export const SynopsisCard = ({id}) => {
    const [info, loading] = useMovieData(id)
    
    if(loading){
        return (
        <HashLoader size={150}
        color={"#123abc"} css={`display: block;
        margin: 0 auto;
        border-color: red;
        `}/>)
    }
    return (
    <>
        <ImgWrapperSynopsis>
            <Img src ={info.cover} />
        </ImgWrapperSynopsis>
        <SynopsisP>
            Sinopsis: {info.synopsis}
        </SynopsisP>
        <SchedulesText>
          Horarios para {info.name}:
            <List >
              {info.schedules.map( schedule => { return (
                <Item key={info.schedules.indexOf(schedule)} > <Link to={`/ticket/${id}/${info.schedules.indexOf(schedule)}`}>{schedule}</Link> </Item>
                ) } )}
            </List>
          </SchedulesText>
    </>
    )
}