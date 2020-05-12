import React from 'react'
import { Link, Image } from './styles'

const DEFAULT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpg'

export const Category = ({ cover=DEFAULT_IMAGE, name='', path='' }) => (
    <Link to={path}>
        <Image src={cover} />
        {name}
    </Link>
)