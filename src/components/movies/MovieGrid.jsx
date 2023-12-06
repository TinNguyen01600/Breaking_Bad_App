import MovieItem from "./MovieItem"
import Spinner from "../UI/Spinner"

const MovieGrid = ({ isLoading, items}) => {
    return (
        <>
            {isLoading ? <Spinner /> : 
            <section className="cards-grid">
                {items.map(item => (
                    <MovieItem key={item.id} item={item}/>
                ))}    
            </section>}
        </>
    )
}

export default MovieGrid