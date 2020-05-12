import React, { useState, useEffect } from 'react'
import firebase from 'firebase/app'
import { List, Item } from './styles'
import { Category } from '../Category'
import BarLoader from 'react-spinners/BarLoader'

function useCategoriesData() {
    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(false)
    const db = firebase.firestore()
    useEffect( _ => {
        setLoading(true)
        db.collection('categories').get()
            .then( res => {
                let responseCategories = []
                res.forEach(category => {
                    responseCategories.push({
                        id:category.id,
                        name: category.data().name,
                        cover: category.data().cover
                    })
                })
                setCategories(responseCategories)
                setLoading(false)
            })
    }, [])
    return { categories, loading}
}

export const ListOfCategories = () => {
    const { categories, loading } = useCategoriesData()
    const [showFixed, setShowFixed] = useState(false)
    useEffect(() => {
        const onScroll = e => {
        const newShowFixed = window.scrollY > 200
        showFixed !== newShowFixed && setShowFixed(newShowFixed)
        }
        document.addEventListener('scroll', onScroll)
        return () => document.removeEventListener('scroll', onScroll)
    }, [showFixed])

    const renderList = (fixed) => (
        <List fixed={fixed}>
        {
            loading
            ? <BarLoader size={100} loading={loading} color={'5AEE39'} />
            : categories.map(category => <Item key={category.id}><Category {...category} path={`/category/${category.name}`} /></Item>)
        }
        </List>
    )
    return (
        <>
        {renderList()}
        {showFixed && renderList(true)}
        </>
    )
}