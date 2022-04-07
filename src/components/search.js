const SearchForm = ({onSearch, handleChange, handlePlaylist})=>{
    return(
        <form onSubmit={onSearch}>
            <input type="text" id="text-input" onChange={handleChange} required/>
            <button className="src-button" type="submit" value="submit">
                Search
            </button>
        </form>
    );
}

export default SearchForm;