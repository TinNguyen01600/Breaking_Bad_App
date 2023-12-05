import MovieItem from "./MovieItem"

const MovieGrid = ({ isLoading, items}) => {
    return (
        <>
            {isLoading ? <h1>Loading...</h1> : 
            <section className="cards">
                {items.map(item => (
                    <MovieItem key={item.id} item={item}/>
                ))}    
            </section>}
        </>
    )
}

export default MovieGrid