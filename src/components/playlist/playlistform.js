import './playlistform.css';

const FormPlaylist = ({onCreate, handleChange, handleChangeDesc, handleChangeTitle})=>{
    return(
        <form className="playlist-form" onChange={onCreate}>
           
            <div className="form-wrapper">
                <p>Create your Playlist</p>
                <div className="form-title">
                    <p>Title</p> 
                    <input 
                    type="text" 
                    
                    placeholder="typing..." 
                    onChange={handleChangeTitle}
                    required
                    ></input> 
                </div>  
                <div className="form-desc">
                    <p>Description</p> 
                    <input 
                    type="text" 
                    
                    placeholder="typing..." 
                    onChange={handleChangeDesc}
                    required
                    ></input> <br></br>
                </div>
            </div>
            <button type="submit" value="submit" className='btn-select'>Create</button>
        </form>
    );
}

export default FormPlaylist;