import React from 'react'
import { PayPalBtn } from '../components/PayPayButton'

export const Tickets = ({id, hora}) => {
    return (
        <div>
            <div>Online Payment Demo</div>
                <PayPalBtn
                    amount = "0.01"
                    currency = {'USD'}
                    onSuccess={ _ => {console.log('aceptado')}}/>
        </div>
    )
}