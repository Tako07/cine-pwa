import React, { useState, useEffect } from 'react'
import { PayPalBtn } from '../components/PayPayButton'
import HashLoader from 'react-spinners/HashLoader'
import QRCode from 'qrcode.react'
import firebase from 'firebase/app'

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

export const Tickets = ({id, hora}) => {
    const [info, loading] = useMovieData(id)
    const [qrCode, setQrCore] = useState(false)

    if(loading){
        return (
            <HashLoader size={150}
            color={"#123abc"} css={`display: block;
            margin: 0 auto;
            border-color: red;
            `}/>
        )
    }
    if(qrCode){
        return (
            <QRCode value={`Boleto para: ${info.name} a las ${info.schedules[hora]}`} />
        )
    }
    return (
        <div>
            <div>Online Payment Demo</div>
                <PayPalBtn
                    amount = "0.01"
                    currency = {'USD'}
                    onSuccess={ _ => { setQrCore(true) } }
                />
        </div>
    )
}