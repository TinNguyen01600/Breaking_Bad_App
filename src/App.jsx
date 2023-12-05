import { useState, useEffect } from 'react'
import "./index.css"
import axios from 'axios'
import Header from './components/UI/Header'

function App() {
    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchItems = async () => {
            const res = await axios(`https://ghibliapi.vercel.app/films`)
            console.log(res.data)
            setItems(res.data)
            setIsLoading(false)
        }
        fetchItems()
    }, [])

    return (
        <>
            <Header />
        </>
    )
}

export default App
