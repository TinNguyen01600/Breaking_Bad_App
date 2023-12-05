const MovieItem = ({ item }) => {
    return (
        <div className="card">
            <div className="card-front">
                <img src={item.image} alt="" />
            </div>
            
        </div>
    )
}
export default MovieItem