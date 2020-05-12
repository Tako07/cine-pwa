import React, { useState, useEffect } from 'react'
import { SynopsisCard } from '../components/MovieCard/synopsisCard'

export const Synopsis = ({id}) => (
    <SynopsisCard id={id} />
)