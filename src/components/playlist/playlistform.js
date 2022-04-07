import './playlistform.css';

const FormPlaylist = ({
    onCreate, 
    handleChange, 
    handleChangeDesc, 
    handleChangeTitle
})=>{
    return(
        <form className="playlist-form" onSubmit={onCreate}>
           
            <div className="form-wrapper">
                <p>Create your Playlist</p>
                <div className="form-title">
                    <label>Title</label> <br></br>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        onChange={handleChangeTitle}
                        placeholder="typing..."
                        required
                    />
                </div>  
                <div className="form-desc">
                    <label>Description</label> <br></br>
                    <input 
                        type="text"  
                        placeholder="typing..." 
                        id="description"
                        name="description"
                        onChange={handleChangeDesc}
                        required
                    ></input>
                </div>
            </div>
            <button type="submit" value="submit" className='btn-select'>
                Create
            </button>
        </form>
    );
}

export default FormPlaylist;