import { useState } from "react"

const Search = () => {
    return (
        <section className="search">
            <form action="">
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Search"
                    autoFocus
                />
            </form>
        </section>
    )
}
export default Search