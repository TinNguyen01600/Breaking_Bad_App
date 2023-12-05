const MovieGrid = ({ isLoading, items}) => {
    return (
        <>
            {isLoading ? <h1>Loading...</h1> : 
            <section className="cards">
                {items.map(item => (
                    <h1 key={item.id}>{item.title}</h1>
                ))}    
            </section>}
        </>
    )
}

export default MovieGrid