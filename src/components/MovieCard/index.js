import React from 'react'
import { Link } from '@reach/router'
import { ImgWrapper, Img, Article, List, Item, SchedulesText } from './styles'
import { FaTicketAlt } from 'react-icons/fa'


const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

export const MovieCard = ({ id, src = DEFAULT_IMAGE, name='', schedules= [] }) => {

  return (
    <Article>
        <>
          <Link to={`/synopsis/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </Link>
          <SchedulesText>
          Horarios para {name}:
            <List >
              {schedules.map( schedule => { return (
                
                <Item key={schedules.indexOf(schedule)} > <Link to={`/ticket/${id}/${schedules.indexOf(schedule)}`}>{schedule}</Link> </Item>
                ) } )}
            </List>
          </SchedulesText>
        </>
    </Article>
  )
}
