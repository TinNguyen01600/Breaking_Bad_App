import { useState, useEffect } from 'react'
import "./index.css"
import axios from 'axios'
import Header from './components/UI/Header'
import MovieGrid from './components/movies/MovieGrid'
import Search from './components/UI/Search'
import SortMenu from './components/UI/SortMenu'

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
    // Sort movies with menu
    const [selectMenuAscending, setSelectMenuAscending] = useState(true)
    const [selectMenuDescending, setSelectMenuDescending] = useState(false)
    const [selectMenuDate, setSelectMenuDate] = useState(true);
    const [selectMenuScore, setSelectMenuScore] = useState(false);
    const [selectMenuDuration, setSelectMenuDuration] = useState(false);

    const onClickDate = () => {
        setSelectMenuDate(true)
        setSelectMenuDuration(false)
        setSelectMenuScore(false)
    }
    const onClickScore = () => {
        setSelectMenuScore(true)
        setSelectMenuDuration(false)
        setSelectMenuDate(false)
    }
    const onClickDuration = () => {
        setSelectMenuDuration(true)
        setSelectMenuScore(false)
        setSelectMenuDate(false)
    }
    const onClickAscending = () => {
        setSelectMenuAscending(true)
        setSelectMenuDescending(false)
    }
    const onClickDescending = () => {
        setSelectMenuAscending(false)
        setSelectMenuDescending(true)
    }
    const menuItems = {
        selectMenuDate, onClickDate,
        selectMenuScore, onClickScore,
        selectMenuDuration, onClickDuration,
        selectMenuAscending, onClickAscending, 
        selectMenuDescending, onClickDescending
    }

    return (
        <>
            <Header />
            <Search
                query={query}
                onChange={handleChange}
            />
            <SortMenu menuItems={menuItems}/>
            <MovieGrid
                isLoading={isLoading}
                items={results}
            />
        </>
    )
}

export default App
