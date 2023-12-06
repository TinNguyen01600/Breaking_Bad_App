import { useState, useEffect } from 'react'
import "./index.css"
import axios from 'axios'
import Header from './components/UI/Header'
import MovieGrid from './components/movies/MovieGrid'
import Search from './components/UI/Search'

function App() {
    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchItems = async () => {
            const res = await axios(`https://ghibliapi.vercel.app/films`)
            setItems(res.data)
            setIsLoading(false)
        }
        fetchItems()
    }, [])

    /*******************************************************************************/
    // Filter movies base on search bar
    const [query, setQuery] = useState('')
    const handleChange = (e) => {
        setQuery(e.target.value)
    }
    const filterMovie = (data, query) => {
        const q = query.toLowerCase();
        return data.filter(item =>
            item.title.split(' ').some(word =>
                word.toLowerCase().startsWith(q)
            )
        );
    }
    const results = filterMovie(items, query)
    /*******************************************************************************/

    return (
        <>
            <Header />
            <Search
                query={query}
                onChange={handleChange}
            />
            <MovieGrid
                isLoading={isLoading}
                items={results}
            />
        </>
    )
}

export default App
