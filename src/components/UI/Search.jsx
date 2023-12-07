const Search = ({ query, onChange}) => {
    return (
        <section className="search">
            <form action="">
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Search title / director / producer"
                    value={query}
                    onChange={onChange}
                    autoFocus
                />
            </form>
        </section>
    )
}
export default Search