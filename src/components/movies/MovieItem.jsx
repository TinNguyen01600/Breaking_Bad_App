const MovieItem = ({ item }) => {
    return (
        <div className="card">
            <div className="card-inner">
                <div className="card-front">
                    <img src={item.image} alt="" />
                </div>
                <div className="card-back">
                    <h1>{item.title}</h1>
                    <ul>
                        <li>Director: {item.director}</li>
                        <li>Producer: {item.producer}</li>
                        <li>{item.running_time} minutes</li>
                        <li>Rating score: {item.rt_score}</li>
                        <li>Year release: {item.release_date}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default MovieItem